describe 'DiffResult', ->
  describe 'detectedDiff', ->
    context 'when new migration to the local', ->
      beforeEach ->
        @options =
          local: [{
            name: '20150823134615-groups'
            path: __dirname + '/fixtures/migrations/20150825015059-groups.coffee'
            date: new Date
            title: 'groups'
          }]
          remote: []
        @result = new DiffResult @options
      it 'returns diff', ->
        detectedDiff = @result.detectedDiff
        diffItem = detectedDiff['20150823134615-groups']
        assert.ok diffItem.local.name == '20150823134615-groups'
        assert.ok Object.keys(diffItem.remote).length <= 0
        assert.ok  @result.noDiffDeleted == false

    context 'when applied migration is not in the local', ->
      beforeEach ->
        @options =
          local: []
          remote: [{
            name: '20150823134615-groups'
            path: __dirname + '/fixtures/migrations/20150825015059-groups.coffee'
            date: new Date
            title: 'groups'
          }]
        @result = new DiffResult @options
      it 'returns diff', ->
        detectedDiff = @result.detectedDiff
        diffItem = detectedDiff['20150823134615-groups']
        assert.ok Object.keys(diffItem.local).length <= 0
        assert.ok diffItem.remote.name == '20150823134615-groups'
        assert.ok  @result.noDiffDeleted == false

    context 'when new migration to the local', ->
      beforeEach ->
        @options =
          local: [{
            name: '20150823134615-groups'
            path: __dirname + '/fixtures/migrations/20150825015059-groups.coffee'
            date: new Date
            title: 'groups'
          }]
          remote: [{
            name: '20150823134615-groups'
            path: __dirname + '/fixtures/migrations/20150825015059-groups.coffee'
            date: new Date
            title: 'groups'
          }]
        @result = new DiffResult @options
      it 'returns no diff', ->
        detectedDiff = @result.detectedDiff
        assert.ok Object.keys(detectedDiff).length <= 0
        assert.ok  @result.noDiffDeleted

  describe 'ghosts', ->
    beforeEach ->
      @options =
        local: []
        remote: [
          name: '20150823134615-groups'
          path: __dirname + '/fixtures/migrations/20150825015059-groups.coffee'
          date: new Date
          title: 'groups'
        ]
      @result = new DiffResult @options
    it 'returns ghosts diff', ->
      assert.ok  @result.hasGhosts
      assert.ok  @result.ghosts[0].name == '20150823134615-groups'
