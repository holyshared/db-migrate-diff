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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi1taWdyYXRlLWRpZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxJQUFJLElBQUksR0FBRyxlQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVoRCxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNyQixNQUFNLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7O0FBRTVDLGtCQUFRLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ25DLGtCQUFRLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0FBQ3pELGtCQUFRLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0Msa0JBQVEsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNyRCxrQkFBUSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RELGtCQUFRLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQsa0JBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUVqQixpQkFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQzNDLE1BQUksUUFBUSxHQUFHLG1CQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsUUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7O0FBRWhDLG9CQUFRLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0FBQ3ZELFNBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztDQUNoQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQ2hCLG9CQUFRLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0Isb0JBQVEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixTQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2pCLENBQUMsQ0FBQyIsImZpbGUiOiJkYi1taWdyYXRlLWRpZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICBkYi1taWdyYXRlLWRpZmZcbiAqXG4gKiAgVXNhZ2U6IGRiLW1pZ3JhdGUtZGlmZiBbb3B0aW9uc11cbiAqICAgIE9wdGlvbnM6XG4gKiAgICAgIC0tZW52LCAtZSAgICAgICAgICAgICAgICAgICBUaGUgZW52aXJvbm1lbnQgdG8gcnVuIHRoZSBtaWdyYXRpb25zIHVuZGVyLiAgICBbZGVmYXVsdDogXCJkZXZcIl1cbiAqICAgICAgLS1taWdyYXRpb25zLWRpciwgLW0gICAgICAgIFRoZSBkaXJlY3RvcnkgY29udGFpbmluZyB5b3VyIG1pZ3JhdGlvbiBmaWxlcy4gIFtkZWZhdWx0OiBcIi4vbWlncmF0aW9uc1wiXVxuICogICAgICAtLWNvbmZpZyAgICAgICAgICAgICAgICAgICAgTG9jYXRpb24gb2YgdGhlIGRhdGFiYXNlLmpzb24gZmlsZS4gICAgICAgICAgICAgW2RlZmF1bHQ6IFwiLi9kYXRhYmFzZS5qc29uXCJdXG4gKiAgICAgIC0tbWlncmF0aW9uLXRhYmxlICAgICAgICAgICBTZXQgdGhlIG5hbWUgb2YgdGhlIG1pZ3JhdGlvbiB0YWJsZS5cbiAqL1xuXG5pbXBvcnQgQXJndiBmcm9tICcuL2FyZ3YnO1xuaW1wb3J0IFJ1bm5lciBmcm9tICcuL3J1bm5lcic7XG5pbXBvcnQgcmVnaXN0cnkgZnJvbSAnLi9yZXBvcnRlcic7XG5pbXBvcnQgY29uc29sZSBmcm9tICcuL2NvbnNvbGUnO1xuXG5sZXQgYXJndiA9IEFyZ3YuZnJvbUFyZ3YocHJvY2Vzcy5hcmd2LnNsaWNlKDIpKTtcblxuZ2xvYmFsLm1hdGNoaW5nID0gJyc7XG5nbG9iYWwubWlncmF0aW9uVGFibGUgPSBhcmd2Lm1pZ3JhdGlvblRhYmxlO1xuXG5jb25zb2xlLmluZm8oJ1xcbiBNSUdSQVRJT05TIERJRkYnKTtcbmNvbnNvbGUuaW5mbygn4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAJyk7XG5jb25zb2xlLmluZm8oJyBlbnZpcm9ubWVudDogJXMnLCBhcmd2LmVudik7XG5jb25zb2xlLmluZm8oJyAgIGRpcmVjdG9yeTogJXMnLCBhcmd2Lm1pZ3JhdGlvbnNEaXIpO1xuY29uc29sZS5pbmZvKCcgICAgICAgdGFibGU6ICVzJywgYXJndi5taWdyYXRpb25UYWJsZSk7XG5jb25zb2xlLmluZm8oJyAgICByZXBvcnRlcjogJXMnLCBhcmd2LnJlcG9ydGVyKTtcbmNvbnNvbGUuaW5mbygnJyk7XG5cblJ1bm5lci5mcm9tQXJndihhcmd2KS5ydW4oKS50aGVuKChyZXN1bHQpID0+IHtcbiAgbGV0IFJlcG9ydGVyID0gcmVnaXN0cnkubG9va3VwKGFyZ3YucmVwb3J0ZXIpO1xuICByZXN1bHQucmVwb3J0VG8obmV3IFJlcG9ydGVyKCkpO1xuXG4gIGNvbnNvbGUub2soJ1RoZSBkaWZmZXJlbmNlIGRldGVjdGlvbiB3YXMgc3VjY2Vzc2Z1bC4nKTtcbiAgcHJvY2Vzcy5leGl0KCk7XG59KS5jYXRjaCgoZXJyKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gIHByb2Nlc3MuZXhpdCgxKTtcbn0pO1xuIl19