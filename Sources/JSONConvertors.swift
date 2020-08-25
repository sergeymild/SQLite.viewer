//
//  JSONConvertors.swift
//  SQLiteViewer
//
//  Created by Sergei Golishnikov on 25/08/2020.
//  Copyright © 2020 BiAtoms. All rights reserved.
//

import Foundation

func jsonData(_ dictionary: [String: Any]) -> Data {
    return try! JSONSerialization.data(withJSONObject: dictionary, options: [])
}

func dictionaryToJSONString(_ dictionary: [String: Any]) -> String {
    return String(data: jsonData(dictionary), encoding: .utf8)!
}

func dictionaryFrom(data: Data) -> [String: Any] {
    let dict = (try? JSONSerialization.jsonObject(
        with: data,
        options: .allowFragments
    )) as? [String: Any]
    
    return dict ?? [:]
}

func dictionaryFrom(string: String) -> [String: Any] {
    guard let data = string.data(using: .utf8) else { return [:] }
    return dictionaryFrom(data: data)
}
