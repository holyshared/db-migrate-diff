global.assert = require 'power-assert'
global.Argv = require('../lib/argv').default
global.Promsie = require('bluebird')

registry = require '../lib/reporter/registry'
global.ReporterRegistry = registry.default
global.NotRegisteredError = registry.NotRegisteredError
global.AlreadyRegisteredError = registry.AlreadyRegisteredError

abstractReporter = require '../lib/reporter/abstract-reporter'
global.AbstractReporter = abstractReporter.default
global.NotImplementedError = abstractReporter.NotImplementedError

detector = require '../lib/diff-detector'
global.DiffDetector = detector.default
global.DiffResult = detector.DiffResult

global.configLoader = require('../lib/config').configLoader
global.path = require 'path'
global.fork = require('child_process').fork
