//
//  AppDelegate.swift
//  SQLite.viewer-Example
//
//  Created by Orkhan Alikhanov on 7/2/17.
//  Copyright © 2017 BiAtoms. All rights reserved.
//

import UIKit
import SQLiteViewer
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?


    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
        
//        SQLiteViewer.shared.start()
//        SQLiteViewer.shared.db.extensions.append("sl3") //for matching Northwind.sl3
        
        copyDbsToDocumentsFolderIfNeeded()
        return true
    }
    
    
    func copyDbsToDocumentsFolderIfNeeded() {
        let docsPath = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true).first!
        
        SQLiteViewer.shared.start(databases: ["\(docsPath)/chinook.sqlite", "\(docsPath)/Northwind.sl3"])
    }
}

