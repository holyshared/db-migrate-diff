describe 'configLoader', ->
  it 'returns an instance of applying the long option', ->
    config = configLoader(__dirname + '/fixtures/migrations.js', 'development')
    current = config.getCurrent()

    assert.ok current.settings.host == 'localhost'
    assert.ok current.settings.user == 'root'
    assert.ok current.settings.password == 'password'
    assert.ok current.settings.database == 'test'
