Pod::Spec.new do |s|
    s.name             = 'SQLite.viewer'
    s.version          = '3.0.5'
    s.summary          = 'An elegant library for debugging sqlite databases in iOS applications'
    s.homepage         = 'https://github.com/sergeymild/SQLite.viewer'
    s.license          = { :type => 'MIT', :file => 'LICENSE' }
    s.author           = { 'Sergey Mild' => 'sgolishnikov@gmail.com' }
    s.source           = { :git => 'https://github.com/sergeymild/SQLite.viewer.git', :tag => s.version.to_s }
    s.module_name      = 'SQLiteViewer'

    s.ios.deployment_target = '11.0'
    s.source_files = 'Sources/*.swift'
    s.resource_bundles = { 'com.sergeymild.sqlite-viewer.assets' => ['Sources/**/*.{js,css,ico,html}'] }

    s.dependency 'SQift', '~> 4.0'
    s.dependency 'Swifter', '~> 1.5.0-rc.1'
end
