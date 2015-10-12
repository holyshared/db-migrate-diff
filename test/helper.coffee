global.assert = require 'power-assert'
global.Argv = require '../lib/argv'

registry = require '../lib/reporter/registry'
global.ReporterRegistry = registry.default
global.NotRegisteredError = registry.NotRegisteredError
global.AlreadyRegisteredError = registry.AlreadyRegisteredError

abstractReporter = require '../lib/reporter/abstract-reporter'
global.AbstractReporter = abstractReporter.default
global.NotImplementedError = abstractReporter.NotImplementedError

global.configLoader = require('../lib/config').configLoader 
global.path = require 'path'
