describe 'AbstractReporter', ->
  beforeEach ->
    @reporter = new AbstractReporter

  describe 'report', ->
    context 'when report method has not been implemented', ->
      it 'throw NotImplementedError error', ->
        @block = () ->
          @reporter.report {}

        assert.throws @block.bind this, NotImplementedError
