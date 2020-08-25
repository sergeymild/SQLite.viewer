import XCTest
import SQift

import Starscream
@testable import SQLiteViewer


class SQLiteViewerTests: XCTestCase {
    
    private var connection: Connection!
    
    override func setUpWithError() throws {
        try initializeConnection()
        SQLiteViewer.shared.startWithInMemoryConnection(
            connection: connection,
            port: 9000,
            databases: ["test.sqlite"]
        )
    }
    
    private func initializeConnection() throws {
        connection = try Connection(storageLocation: .inMemory)
        try connection.execute("CREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT, email TEXT)")
        
        try connection.prepare("INSERT INTO users VALUES(:id, :name, :email)").bind(1, "Alice", "alice@mac.com").run()
        try connection.prepare("INSERT INTO users VALUES(:id, :name, :email)").bind(2, "John", "john@apple.com").run()
    }
    
    private func createSocket() -> WebSocket {
        let endpoint = "http://localhost:9000/ws"
        let url = URL(string: endpoint)!
        let socket = WebSocket(request: .init(url: url, cachePolicy: .reloadIgnoringCacheData, timeoutInterval: 3))
        socket.disableSSLCertValidation = false
        return socket
    }
    
    func testDatabaseList() {
        let ex = expectation(description: "testDatabaseList")
        let socket = createSocket()
        let requestId = UUID().uuidString
        socket.onConnect = {
            debugPrint("-> connected")
            let data = jsonData(["type": "databases", "requestId": requestId])
            let string = String(data: data, encoding: .utf8)!
            print("send: \(string)")
            socket.write(string: string)
            
            socket.onData = {
                let dictionary = dictionaryFrom(data: $0)
                XCTAssertEqual(dictionary["requestId"] as? String, requestId)
                XCTAssertEqual(dictionary["type"] as? String, "databases")
                XCTAssertEqual(dictionary["data"] as? [String], ["test.sqlite"])
                ex.fulfill()
            }
        }
        
        socket.connect()
        waitForExpectations(timeout: 10)
    }
    
    func testTableList() {
        let ex = expectation(description: "testTableList")
        let socket = createSocket()
        let requestId = UUID().uuidString
        socket.onConnect = {
            debugPrint("-> connected")
            let data = jsonData(["type": "tables", "databaseName": "test.sqlite", "requestId": requestId])
            let string = String(data: data, encoding: .utf8)!
            print("send: \(string)")
            socket.write(string: string)
            
            socket.onData = {
                let dictionary = dictionaryFrom(data: $0)
                let data = (dictionary["data"] as! [[String: Any]])[0]
                
                XCTAssertEqual(dictionary["requestId"] as? String, requestId)
                XCTAssertEqual(dictionary["type"] as? String, "tables")
                XCTAssertEqual(data["count"] as? Int, 2)
                XCTAssertEqual(data["tableName"] as? String, "users")
                
                var columns = data["columns"] as! [[String: Any]]
                columns.sort(by: { ($0["cid"] as! Int) < ($1["cid"] as! Int) })
                
                XCTAssertEqual(columns.count, 3)
                
                XCTAssertEqual(columns[0]["cid"] as? Int, 0)
                XCTAssertEqual(columns[0]["pk"] as? Int, 1)
                XCTAssertEqual(columns[0]["name"] as? String, "id")
                XCTAssertEqual(columns[0]["type"] as? String, "INTEGER")
                XCTAssertEqual(columns[0]["notnull"] as? Int, 0)
                
                XCTAssertEqual(columns[1]["cid"] as? Int, 1)
                XCTAssertEqual(columns[1]["pk"] as? Int, 0)
                XCTAssertEqual(columns[1]["name"] as? String, "name")
                XCTAssertEqual(columns[1]["type"] as? String, "TEXT")
                XCTAssertEqual(columns[1]["notnull"] as? Int, 0)
                
                XCTAssertEqual(columns[2]["cid"] as? Int, 2)
                XCTAssertEqual(columns[2]["pk"] as? Int, 0)
                XCTAssertEqual(columns[2]["name"] as? String, "email")
                XCTAssertEqual(columns[2]["type"] as? String, "TEXT")
                XCTAssertEqual(columns[2]["notnull"] as? Int, 0)
                ex.fulfill()
            }
        }
        
        socket.connect()
        waitForExpectations(timeout: 10)
    }
    
    func testTableData() {
        let ex = expectation(description: "testTableData")
        let socket = createSocket()
        let requestId = UUID().uuidString
        socket.onConnect = {
            debugPrint("-> connected")
            let data = jsonData([
                "type": "rows" as Any,
                "tableName": "users",
                "databaseName": "test.sqlite" as Any,
                "requestId": requestId as Any,
                "order": "id asc" as Any,
                "limit": "20" as Any,
                "offset": "0" as Any
            ])
            let string = String(data: data, encoding: .utf8)!
            print("send: \(string)")
            socket.write(string: string)
            
            socket.onData = {
                let dictionary = dictionaryFrom(data: $0)
                
                XCTAssertEqual(dictionary["type"] as? String, "rows")
                XCTAssertEqual(dictionary["requestId"] as? String, requestId)
                
                let data = (dictionary["data"] as! [String: Any])
                let rows = data["rows"] as! [[String: Any]]
                XCTAssert(rows.count == 2)
                
                XCTAssertEqual(rows[0]["id"] as? Int, 1)
                XCTAssertEqual(rows[1]["id"] as? Int, 2)
                ex.fulfill()
            }
        }
        
        socket.connect()
        waitForExpectations(timeout: 10)
        
    }
    
    func testRawExecute() {
//        let query1 = "INSERT INTO 'users' values(3, 'test1', 'test1@t.com'), (4, 'test2', 'test2@t.com')"
//
//        let ex1 = expectation(description: "testRawExecute1")
//        client.request("/databases/db.sqlite/execute", parameters: ["query": query1]).responseJSON { r in
//            let json = r.value as! [String: Any]
//            XCTAssertEqual(json["success"] as? Bool, true)
//            let affectedRows = (json["data"] as! [String:Int])["affected_rows"]!
//            XCTAssertEqual(affectedRows, 2)
//            ex1.fulfill()
//        }
//        wait(for: [ex1], timeout: 1)
//
//
//        let query2 = "SELECT id, email FROM 'users' where id > 2"
//
//        let ex2 = expectation(description: "testRawExecute2")
//        client.request("/databases/db.sqlite/execute", parameters: ["query": query2]).responseJSON { r in
//            let json = r.value as! [String: Any]
//            XCTAssertEqual(json["success"] as? Bool, true)
//            let (cols, rows) = self.extractTable(json["data"])
//            XCTAssertEqual(cols, ["id", "email"])
//            XCTAssertEqual(NSArray(array: rows), NSArray(array: [
//                [3, "test1@t.com"],
//                [4, "test2@t.com"]
//                ]))
//
//            ex2.fulfill()
//        }
//        wait(for: [ex2], timeout: 1)
//
//
//        let query3 = "DELETE FROM users WHERE id > 2"
//
//        let ex3 = expectation(description: "testRawExecute3")
//        client.request("/databases/db.sqlite/execute", parameters: ["query": query3]).responseJSON { r in
//            let json = r.value as! [String: Any]
//            XCTAssertEqual(json["success"] as? Bool, true)
//            let affectedRows = (json["data"] as! [String:Int])["affected_rows"]!
//            XCTAssertEqual(affectedRows, 2)
//            ex3.fulfill()
//        }
//        wait(for: [ex3], timeout: 1)
    }
    
    
    func testError() {
//        let query = "INSERT INTO users values(1, 'non-unique', 'alice@mac.com')"
//
//        let ex = expectation(description: "testError")
//        client.request("/databases/db.sqlite/execute", parameters: ["query": query]).responseJSON { r in
//            let json = r.value as! [String: Any]
//            XCTAssertEqual(json["success"] as? Bool, false)
//            XCTAssertEqual(json["data"] as! String, "UNIQUE constraint failed: users.id (code: 19)")
//            ex.fulfill()
//        }
//
//        let ex2 = expectation(description: "testError2")
//        client.request("/databases/db.sqlite/tables/my_table").responseJSON { r in
//            let json = r.value as! [String: Any]
//            XCTAssertEqual(json["success"] as? Bool, false)
//            XCTAssertEqual(json["data"] as! String, "no such table: my_table (code: 1)")
//            ex2.fulfill()
//        }
//
//        let ex3 = expectation(description: "testError3")
//        client.request("/databases/my_database/tables").responseJSON { r in
//            let json = r.value as! [String: Any]
//            XCTAssertEqual(json["success"] as? Bool, false)
//            XCTAssertEqual(json["data"] as! String, "no such database: my_database (code: 1)")
//            ex3.fulfill()
//        }
//
//
//
//        waitForExpectations(timeout: 1)
    }
    
    func testDownload() {
//        let ex = expectation(description: "testDownload")
//        client.request("/databases/db.sqlite/download").responseData { r in
//
//            //see https://www.sqlite.org/fileformat.html#magic_header_string
//            //we have "SQLite format 3" including the nul terminator character at the end.
//            XCTAssertEqual(String(cString: Array(r.value!)), "SQLite format 3")
//            ex.fulfill()
//        }
//        waitForExpectations(timeout: 1)
    }
    
    func testIndexHtml() {
//        let ex = expectation(description: "testIndexHtml")
//        client.request("http://localhost:8081/" as URLConvertible).responseString { r in
//            XCTAssert(r.value!.hasPrefix("<!DOCTYPE html>"))
//            ex.fulfill()
//        }
//        waitForExpectations(timeout: 1000)
    }
    
//    func extractTable(_ data: Any?) -> (columns: [String], rows: [[Any]]) {
//        let data = data as! [String: Any]
//        let columns = data["columns"] as! [String]
//        let rows = data["rows"] as! [[Any]]
//
//        return (columns, rows)
//    }
}
