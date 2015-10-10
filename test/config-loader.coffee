describe 'configLoader', ->
  it 'returns an instance of applying the long option', ->
    config = configLoader(__dirname + '/fixtures/migrations.js', 'development')
    assert.ok config.host == 'localhost'
    assert.ok config.user == 'root'
    assert.ok config.password == 'password'
    assert.ok config.database == 'test'
