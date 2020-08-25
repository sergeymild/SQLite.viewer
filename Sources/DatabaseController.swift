import SQift

typealias QueryListener = (String) -> Void

class DatabaseController {
    private var mappedDbNames: [String: String] = [:]
    
    private var queryListener: QueryListener?
    
    private var inMemoryconnection: Connection?
    
    public init(
        databases: [String],
        inMemoryconnection: Connection? = nil
    ) {
        self.inMemoryconnection = inMemoryconnection
        databases.forEach {
            let name = FileManager.default.displayName(atPath: $0)
            mappedDbNames[name] = $0
        }
    }
    
    func listenQueries(handler: @escaping QueryListener) {
        self.queryListener = handler
    }
    
    func openConnection(db: String) throws -> Connection {
        if let connection = inMemoryconnection { return connection }
        guard let path = mappedDbNames[db] else {
            fatalError("no such database: \(db)")
        }

        let connection = try Connection(storageLocation: .onDisk(path))
        connection.traceEvent { [queryListener] event in
            if case let .statement(_, sql) = event {
                queryListener?(sql)
            }
        }
        return connection
    }
    
    func getDatabases() throws -> [String] {
        return Array(mappedDbNames.keys)
    }
    
    func getTableList(db: String) throws -> [[String: Any]] {
        let db = try openConnection(db: db)
        
        var tablesData: [[String: Any]] = []
        let tableNames: [String] = try db.query("SELECT name FROM sqlite_master WHERE type = ?", "table")
        
        for tableName in tableNames {
            var infos: [Any] = []
            let rows: [TableInfoExtractor] = (try db.query("PRAGMA table_info(\(tableName))"))
            for row in rows {
                var info = row.tableInfo
                info["__id"] = UUID().uuidString
                infos.append(info)
            }
            let count: Int = (try! db.query("SELECT COUNT(*) FROM '\(tableName)'"))?.value(at: 0) ?? 0
            tablesData.append([
                "__id": UUID().uuidString,
                "tableName": tableName,
                "count": count,
                "columns": infos
            ])
        }
        
        return tablesData
    }
    
    func getTableData(
        db: String,
        table: String,
        limit: String?,
        offset: String?,
        order: String?,
        clause: String?
    ) throws -> [String: Any] {
        let db = try openConnection(db: db)
        var query = "SELECT * FROM '\(table)'"
        if let clause = clause { query += " WHERE \(clause)" }
        if let order = order { query += " ORDER BY \(order)" }
        if let limit = limit { query += " LIMIT \(limit)" }
        if let offset = offset { query += " OFFSET \(offset)" }

        var result = try selectQuery(db: db, query: query)
        result["__id"] = UUID().uuidString
        return result
    }
    
    func executeRawQuery(db: String, query: String) throws -> Any {
        let db = try openConnection(db: db)
        
        if query.lowercased().contains("select") {
            return try selectQuery(db: db, query: query)
        }
        
        try db.run(query)
        return ["affected_rows": db.changes]
    }
    
    func selectQuery(db: Connection, query: String) throws -> [String: Any] {
        let rows: [ColumnsValues] = try db.query(query)
        if rows.isEmpty { return [:] }

        return [
            "columns": rows[0].columnNames,
            "rows": rows.map { $0.values }
        ]
    }
}

fileprivate class ColumnsValues: ExpressibleByRow {
    var columnNames: [String] = []
    var values: [String: Any] = [:]
    
    required init(row: Row) throws {
        columnNames = row.columns.map { $0.name }
        for (index, column) in columnNames.enumerated() {
            values[column] = row.value(at: index)
        }
        values["__id"] = UUID().uuidString
    }
}

fileprivate class TableInfoExtractor: ExpressibleByRow {
    var tableInfo: [String: Any] = [:]

    required init(row: Row) throws {
        for (index, column) in row.columns.enumerated() {
            let value = row.value(at: index)
            tableInfo[column.name] = value
        }
    }
}
