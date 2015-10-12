describe 'ReporterRegistry', ->
  beforeEach ->
    @registry = new ReporterRegistry

  describe 'lookup', ->
    beforeEach ->
      @registry.register 'foo', {}
    it 'returns registered reporter', ->
      assert.ok @registry.lookup('foo') != null

  describe 'register', ->
    context 'when already registered', ->
      it 'throw AlreadyRegisteredError error', ->
        @registry.register 'foo', {}
        @block = () ->
          @registry.register 'foo', {}

        assert.throws @block.bind this, AlreadyRegisteredError
