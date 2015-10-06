describe 'Argv', ->
  describe 'fromArgv()', ->
    it 'returns argv instance', ->
      argv = Argv.fromArgv [
        'test.js',
        '--config', 'database.js',
        '--env', 'dev',
        '--migrations-dir', './migrations',
        '--migration-table', 'migrations'
      ]
      assert.ok argv.config == 'database.js'
      assert.ok argv.env == 'dev'
      assert.ok argv.migrationsDir == './migrations'
      assert.ok argv.migrationTable == 'migrations'
