describe 'configLoader', ->
  it 'returns an instance of applying the long option', ->
    config = configLoader(__dirname + '/fixtures/migrations.js', 'development')
    assert.ok config.host == 'localhost'
    assert.ok config.user == 'dbmigrate'
    assert.ok config.password == 'dbmigrate'
    assert.ok config.database == 'dbmigrate'
