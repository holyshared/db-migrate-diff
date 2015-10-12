describe 'ReporterRegistry', ->
  beforeEach ->
    @registry = new ReporterRegistry

  describe 'lookup', ->
    beforeEach ->
      @registry.register 'foo', {}
    context 'when already registered', ->
      it 'returns registered reporter', ->
        assert.ok @registry.lookup('foo') != null

    context 'when not registered', ->
      it 'throw NotRegisteredError error', ->
        @block = () ->
          @registry.lookup('bar')
        assert.throws @block.bind this, NotRegisteredError

  describe 'register', ->
    context 'when already registered', ->
      it 'throw AlreadyRegisteredError error', ->
        @registry.register 'foo', {}
        @block = () ->
          @registry.register 'foo', {}

        assert.throws @block.bind this, AlreadyRegisteredError
