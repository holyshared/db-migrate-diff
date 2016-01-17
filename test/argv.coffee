describe 'Argv', ->
  describe 'fromArgv()', ->
    context 'when long options', ->
      beforeEach ->
        @argv = Argv.fromArgv [
          'test.js',
          '--config', 'database.js',
          '--env', 'dev',
          '--migrations-dir', './migrations',
          '--migration-table', 'migrations',
          '--reporter', 'test'
        ]

      it 'returns an instance of applying the long option', ->
        assert.ok @argv.config == 'database.js'
        assert.ok @argv.env == 'dev'
        assert.ok @argv.migrationsDir == './migrations'
        assert.ok @argv.migrationTable == 'migrations'
        assert.ok @argv.reporter == 'test'

    context 'when short options', ->
      beforeEach ->
        @argv = Argv.fromArgv [
          'test.js',
          '--config', 'database.js',
          '-e', 'dev',
          '-m', './migrations',
          '-t', 'migrations',
          '-r', 'test'
        ]
      it 'returns an instance of applying the short option', ->
        assert.ok @argv.config == 'database.js'
        assert.ok @argv.env == 'dev'
        assert.ok @argv.migrationsDir == './migrations'
        assert.ok @argv.migrationTable == 'migrations'
        assert.ok @argv.reporter == 'test'

  describe 'defaultArgv()', ->
    beforeEach ->
      @argv = Argv.defaultArgv()

    it 'returns an default argv', ->
      assert.ok @argv.env == 'dev'
      assert.ok @argv.migrationsDir == './migrations'
      assert.ok @argv.config == path.resolve process.cwd(), './database.json'
      assert.ok @argv.migrationTable == 'migrations'
      assert.ok @argv.reporter == 'default'
