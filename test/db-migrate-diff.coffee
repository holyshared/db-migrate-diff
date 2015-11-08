describe 'db-migrate-diff', ->
  it 'display migration diff', ->
    @command = new Promsie (resolve, reject) ->
      args = [
        '--env', 'development',
        '-m', 'test/fixtures/migrations',
        '--config', 'test/fixtures/migrations.js'
      ]
      diffTool = fork(__dirname + '/../bin/db-migrate-diff', args)
      diffTool.on 'exit', (code, signal) ->
        return reject(new Error('exit code: ' + code.toString())) if code != 0
        resolve(code)
      diffTool.on 'error', reject

    @command.then (code) ->
      assert.ok code == 0
