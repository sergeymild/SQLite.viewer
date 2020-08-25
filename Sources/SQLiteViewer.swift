import SQift
import Swifter

private enum LocalWebserverError: Error {
    case serialization
}

private var connected: [Int: WebSocketSession] = [:]

public class SQLiteViewer {
    public static var shared = SQLiteViewer()
    
    lazy var localPath: String = {
        let bundle = Bundle(for: SQLiteViewer.self).resourceURL!
        let path = bundle.appendingPathComponent("com.sergeymild.sqlite-viewer.assets.bundle")
        return path.path
    }()
    
    private lazy var server = HttpServer()
    
    private var databaseController: DatabaseController!
    
    private func send(data: [String: Any]) {
        let data = jsonData(data)
        connected.values.forEach { $0.writeBinary([UInt8](data)) }
    }
    
    private func startOn(port: UInt16) {
        let address = getWiFiAddress() ?? "localhost"
        print("===============================")
        print("=== SQLiteViewer \(address):\(port) ===")
        print("===============================")
        server.listenAddressIPv4 = getWiFiAddress()
        try! server.start(port, forceIPv4: true)
        
        databaseController?.listenQueries { [weak self] query in
            self?.send(data: ["data": ["sql": query], "type": "sql"])
        }
        
        let ws = websocket(
            text: { [weak self] _, text in
                print("WS:TEXT: \(text)")
                guard let self = self else { return }
                do {
                    let request = dictionaryFrom(string: text)
                    switch request["type"] as! String {
                    case "databases": try self.fetchDatabases(request)
                    case "tables": try self.fetchTables(request)
                    case "rows": try self.fetchRows(request)
                    default:
                        fatalError("Unimplemented \(text)")
                    }
                } catch {
                    fatalError(error.localizedDescription)
                }
            },
            
            connected: { session in
                connected[session.hashValue] = session
            },
            
            disconnected: { session in
                connected.removeValue(forKey: session.hashValue)
            }
        )
        
        server["/ws"] = ws
        
        addStaticResponses()
    }
    
    public func start(
        port: UInt16 = 8081,
        databases: [String] = []
    ) {
        databaseController = DatabaseController(databases: databases)
        startOn(port: port)
    }
    
    internal func startWithInMemoryConnection(
        connection: Connection,
        port: UInt16 = 8081,
        databases: [String] = []
    ) {
        databaseController = DatabaseController(
            databases: databases,
            inMemoryconnection: connection
        )
        startOn(port: port)
    }
    
    func stop() {
        server.stop()
    }
    
    private func addStaticResponses() {
        let indexHtmlResponse: (HttpRequest) -> HttpResponse = {
            [weak self] _ in
            guard let self = self else { return .internalServerError }
            return self.indexResponse()
        }
        
        server["/"] = indexHtmlResponse
        server["/database/:database"] = indexHtmlResponse
        server["/database/:database/table/:table"] = indexHtmlResponse
        
        server["/css/:name"] = { [localPath]  request in
            guard let name = request.params[":name"] else { return .notFound }
            let url = URL(fileURLWithPath: "\(localPath)/\(name)")
            do {
                return .ok(.data(try Data(contentsOf: url)))
            } catch { return .notFound }
        }
        
        server["/js/:name"] = { [localPath]  request in
            guard let name = request.params[":name"] else { return .notFound }
            let url = URL(fileURLWithPath: "\(localPath)/\(name)")
            do {
                return .ok(.data(try Data(contentsOf: url)))
            } catch { return .notFound }
        }
    }
    
    private func indexResponse() -> HttpResponse {
        let url = URL(fileURLWithPath: "\(localPath)/index.html")
        do {
            return .ok(.data(try Data(contentsOf: url)))
        } catch { return .notFound }
    }
    
    private func fetchDatabases(_ request: [String: Any]) throws {
        let databases = try databaseController.getDatabases()
        let requestId = request["requestId"] as? String ?? ""
        send(data: [
            "data": databases,
            "type": "databases",
            "requestId": requestId
        ])
    }
    
    private func fetchTables(_ request: [String: Any]) throws {
        let databaseName = request["databaseName"] as! String
        let requestId = request["requestId"] as? String ?? ""
        let tables = try databaseController.getTableList(db: databaseName)
        send(data: [
            "data": tables,
            "type": "tables",
            "requestId": requestId
        ])
    }
    
    private func fetchRows(_ request: [String: Any]) throws {
        let databaseName = request["databaseName"] as! String
        let tableName = request["tableName"] as! String
        let order = request["order"] as? String
        let limit = request["limit"] as? String
        let offset = request["offset"] as? String
        let clause = request["clause"] as? String
        let requestId = request["requestId"] as? String ?? ""
        let rows = try databaseController.getTableData(
            db: databaseName,
            table: tableName,
            limit: limit,
            offset: offset,
            order: order,
            clause: clause
        )
        send(data: [
            "data": rows,
            "type": "rows",
            "requestId": requestId
        ])
    }
    
    deinit {
        stop()
    }
}
