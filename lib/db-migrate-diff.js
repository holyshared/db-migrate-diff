'use strict';

var _argv = require('./argv');

var _argv2 = _interopRequireDefault(_argv);

var _runner = require('./runner');

var _runner2 = _interopRequireDefault(_runner);

var _reporter = require('./reporter');

var _reporter2 = _interopRequireDefault(_reporter);

var _console = require('./console');

var _console2 = _interopRequireDefault(_console);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  db-migrate-diff
 *
 *  Usage: db-migrate-diff [options]
 *    Options:
 *      --env, -e                   The environment to run the migrations under.    [default: "dev"]
 *      --migrations-dir, -m        The directory containing your migration files.  [default: "./migrations"]
 *      --config                    Location of the database.json file.             [default: "./database.json"]
 *      --migration-table           Set the name of the migration table.
 */

var argv = _argv2.default.fromArgv(process.argv.slice(2));

global.matching = '';
global.migrationTable = argv.migrationTable;

_console2.default.info('\n MIGRATIONS DIFF');
_console2.default.info('────────────────────────────────────────');
_console2.default.info(' environment: %s', argv.env);
_console2.default.info('   directory: %s', argv.migrationsDir);
_console2.default.info('       table: %s', argv.migrationTable);
_console2.default.info('    reporter: %s', argv.reporter);
_console2.default.info('');

_runner2.default.fromArgv(argv).run().then(function (result) {
  var Reporter = _reporter2.default.lookup(argv.reporter);
  result.reportTo(new Reporter());

  _console2.default.ok('The difference detection was successful.');
  process.exit();
}).catch(function (err) {
  _console2.default.error(err.message);
  _console2.default.error(err.stack);
  process.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi1taWdyYXRlLWRpZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxJQUFJLE9BQU8sZUFBSyxRQUFMLENBQWMsUUFBUSxJQUFSLENBQWEsS0FBYixDQUFtQixDQUFuQixDQUFkLENBQVA7O0FBRUosT0FBTyxRQUFQLEdBQWtCLEVBQWxCO0FBQ0EsT0FBTyxjQUFQLEdBQXdCLEtBQUssY0FBTDs7QUFFeEIsa0JBQVEsSUFBUixDQUFhLG9CQUFiO0FBQ0Esa0JBQVEsSUFBUixDQUFhLDBDQUFiO0FBQ0Esa0JBQVEsSUFBUixDQUFhLGtCQUFiLEVBQWlDLEtBQUssR0FBTCxDQUFqQztBQUNBLGtCQUFRLElBQVIsQ0FBYSxrQkFBYixFQUFpQyxLQUFLLGFBQUwsQ0FBakM7QUFDQSxrQkFBUSxJQUFSLENBQWEsa0JBQWIsRUFBaUMsS0FBSyxjQUFMLENBQWpDO0FBQ0Esa0JBQVEsSUFBUixDQUFhLGtCQUFiLEVBQWlDLEtBQUssUUFBTCxDQUFqQztBQUNBLGtCQUFRLElBQVIsQ0FBYSxFQUFiOztBQUVBLGlCQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsRUFBc0IsR0FBdEIsR0FBNEIsSUFBNUIsQ0FBaUMsVUFBQyxNQUFELEVBQVk7QUFDM0MsTUFBSSxXQUFXLG1CQUFTLE1BQVQsQ0FBZ0IsS0FBSyxRQUFMLENBQTNCLENBRHVDO0FBRTNDLFNBQU8sUUFBUCxDQUFnQixJQUFJLFFBQUosRUFBaEIsRUFGMkM7O0FBSTNDLG9CQUFRLEVBQVIsQ0FBVywwQ0FBWCxFQUoyQztBQUszQyxVQUFRLElBQVIsR0FMMkM7Q0FBWixDQUFqQyxDQU1HLEtBTkgsQ0FNUyxVQUFDLEdBQUQsRUFBUztBQUNoQixvQkFBUSxLQUFSLENBQWMsSUFBSSxPQUFKLENBQWQsQ0FEZ0I7QUFFaEIsb0JBQVEsS0FBUixDQUFjLElBQUksS0FBSixDQUFkLENBRmdCO0FBR2hCLFVBQVEsSUFBUixDQUFhLENBQWIsRUFIZ0I7Q0FBVCxDQU5UIiwiZmlsZSI6ImRiLW1pZ3JhdGUtZGlmZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogIGRiLW1pZ3JhdGUtZGlmZlxuICpcbiAqICBVc2FnZTogZGItbWlncmF0ZS1kaWZmIFtvcHRpb25zXVxuICogICAgT3B0aW9uczpcbiAqICAgICAgLS1lbnYsIC1lICAgICAgICAgICAgICAgICAgIFRoZSBlbnZpcm9ubWVudCB0byBydW4gdGhlIG1pZ3JhdGlvbnMgdW5kZXIuICAgIFtkZWZhdWx0OiBcImRldlwiXVxuICogICAgICAtLW1pZ3JhdGlvbnMtZGlyLCAtbSAgICAgICAgVGhlIGRpcmVjdG9yeSBjb250YWluaW5nIHlvdXIgbWlncmF0aW9uIGZpbGVzLiAgW2RlZmF1bHQ6IFwiLi9taWdyYXRpb25zXCJdXG4gKiAgICAgIC0tY29uZmlnICAgICAgICAgICAgICAgICAgICBMb2NhdGlvbiBvZiB0aGUgZGF0YWJhc2UuanNvbiBmaWxlLiAgICAgICAgICAgICBbZGVmYXVsdDogXCIuL2RhdGFiYXNlLmpzb25cIl1cbiAqICAgICAgLS1taWdyYXRpb24tdGFibGUgICAgICAgICAgIFNldCB0aGUgbmFtZSBvZiB0aGUgbWlncmF0aW9uIHRhYmxlLlxuICovXG5cbmltcG9ydCBBcmd2IGZyb20gJy4vYXJndic7XG5pbXBvcnQgUnVubmVyIGZyb20gJy4vcnVubmVyJztcbmltcG9ydCByZWdpc3RyeSBmcm9tICcuL3JlcG9ydGVyJztcbmltcG9ydCBjb25zb2xlIGZyb20gJy4vY29uc29sZSc7XG5cbmxldCBhcmd2ID0gQXJndi5mcm9tQXJndihwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpO1xuXG5nbG9iYWwubWF0Y2hpbmcgPSAnJztcbmdsb2JhbC5taWdyYXRpb25UYWJsZSA9IGFyZ3YubWlncmF0aW9uVGFibGU7XG5cbmNvbnNvbGUuaW5mbygnXFxuIE1JR1JBVElPTlMgRElGRicpO1xuY29uc29sZS5pbmZvKCfilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAnKTtcbmNvbnNvbGUuaW5mbygnIGVudmlyb25tZW50OiAlcycsIGFyZ3YuZW52KTtcbmNvbnNvbGUuaW5mbygnICAgZGlyZWN0b3J5OiAlcycsIGFyZ3YubWlncmF0aW9uc0Rpcik7XG5jb25zb2xlLmluZm8oJyAgICAgICB0YWJsZTogJXMnLCBhcmd2Lm1pZ3JhdGlvblRhYmxlKTtcbmNvbnNvbGUuaW5mbygnICAgIHJlcG9ydGVyOiAlcycsIGFyZ3YucmVwb3J0ZXIpO1xuY29uc29sZS5pbmZvKCcnKTtcblxuUnVubmVyLmZyb21Bcmd2KGFyZ3YpLnJ1bigpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICBsZXQgUmVwb3J0ZXIgPSByZWdpc3RyeS5sb29rdXAoYXJndi5yZXBvcnRlcik7XG4gIHJlc3VsdC5yZXBvcnRUbyhuZXcgUmVwb3J0ZXIoKSk7XG5cbiAgY29uc29sZS5vaygnVGhlIGRpZmZlcmVuY2UgZGV0ZWN0aW9uIHdhcyBzdWNjZXNzZnVsLicpO1xuICBwcm9jZXNzLmV4aXQoKTtcbn0pLmNhdGNoKChlcnIpID0+IHtcbiAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcbiAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG4iXX0=