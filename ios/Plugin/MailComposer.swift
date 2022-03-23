import Foundation

@objc public class MailComposer: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
