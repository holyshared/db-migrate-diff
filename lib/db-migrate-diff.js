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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi1taWdyYXRlLWRpZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFXQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2IsSUFBSSxJQUFJLEdBQUcsZUFBSyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFaEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDckIsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDOztBQUU1QyxrQkFBUSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNuQyxrQkFBUSxJQUFJLENBQUMsMENBQTBDLENBQUMsQ0FBQztBQUN6RCxrQkFBUSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLGtCQUFRLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDckQsa0JBQVEsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0RCxrQkFBUSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hELGtCQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs7QUFFakIsaUJBQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU0sRUFBSztBQUMzQyxNQUFJLFFBQVEsR0FBRyxtQkFBUyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlDLFFBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDOztBQUVoQyxvQkFBUSxFQUFFLENBQUMsMENBQTBDLENBQUMsQ0FBQztBQUN2RCxTQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDaEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUNoQixvQkFBUSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLG9CQUFRLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsU0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNqQixDQUFDLENBQUMiLCJmaWxlIjoiZGItbWlncmF0ZS1kaWZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAgZGItbWlncmF0ZS1kaWZmXG4gKlxuICogIFVzYWdlOiBkYi1taWdyYXRlLWRpZmYgW29wdGlvbnNdXG4gKiAgICBPcHRpb25zOlxuICogICAgICAtLWVudiwgLWUgICAgICAgICAgICAgICAgICAgVGhlIGVudmlyb25tZW50IHRvIHJ1biB0aGUgbWlncmF0aW9ucyB1bmRlci4gICAgW2RlZmF1bHQ6IFwiZGV2XCJdXG4gKiAgICAgIC0tbWlncmF0aW9ucy1kaXIsIC1tICAgICAgICBUaGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgeW91ciBtaWdyYXRpb24gZmlsZXMuICBbZGVmYXVsdDogXCIuL21pZ3JhdGlvbnNcIl1cbiAqICAgICAgLS1jb25maWcgICAgICAgICAgICAgICAgICAgIExvY2F0aW9uIG9mIHRoZSBkYXRhYmFzZS5qc29uIGZpbGUuICAgICAgICAgICAgIFtkZWZhdWx0OiBcIi4vZGF0YWJhc2UuanNvblwiXVxuICogICAgICAtLW1pZ3JhdGlvbi10YWJsZSAgICAgICAgICAgU2V0IHRoZSBuYW1lIG9mIHRoZSBtaWdyYXRpb24gdGFibGUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQXJndiBmcm9tICcuL2FyZ3YnO1xuaW1wb3J0IFJ1bm5lciBmcm9tICcuL3J1bm5lcic7XG5pbXBvcnQgcmVnaXN0cnkgZnJvbSAnLi9yZXBvcnRlcic7XG5pbXBvcnQgY29uc29sZSBmcm9tICcuL2NvbnNvbGUnO1xuXG5sZXQgYXJndiA9IEFyZ3YuZnJvbUFyZ3YocHJvY2Vzcy5hcmd2LnNsaWNlKDIpKTtcblxuZ2xvYmFsLm1hdGNoaW5nID0gJyc7XG5nbG9iYWwubWlncmF0aW9uVGFibGUgPSBhcmd2Lm1pZ3JhdGlvblRhYmxlO1xuXG5jb25zb2xlLmluZm8oJ1xcbiBNSUdSQVRJT05TIERJRkYnKTtcbmNvbnNvbGUuaW5mbygn4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAJyk7XG5jb25zb2xlLmluZm8oJyBlbnZpcm9ubWVudDogJXMnLCBhcmd2LmVudik7XG5jb25zb2xlLmluZm8oJyAgIGRpcmVjdG9yeTogJXMnLCBhcmd2Lm1pZ3JhdGlvbnNEaXIpO1xuY29uc29sZS5pbmZvKCcgICAgICAgdGFibGU6ICVzJywgYXJndi5taWdyYXRpb25UYWJsZSk7XG5jb25zb2xlLmluZm8oJyAgICByZXBvcnRlcjogJXMnLCBhcmd2LnJlcG9ydGVyKTtcbmNvbnNvbGUuaW5mbygnJyk7XG5cblJ1bm5lci5mcm9tQXJndihhcmd2KS5ydW4oKS50aGVuKChyZXN1bHQpID0+IHtcbiAgbGV0IFJlcG9ydGVyID0gcmVnaXN0cnkubG9va3VwKGFyZ3YucmVwb3J0ZXIpO1xuICByZXN1bHQucmVwb3J0VG8obmV3IFJlcG9ydGVyKCkpO1xuXG4gIGNvbnNvbGUub2soJ1RoZSBkaWZmZXJlbmNlIGRldGVjdGlvbiB3YXMgc3VjY2Vzc2Z1bC4nKTtcbiAgcHJvY2Vzcy5leGl0KCk7XG59KS5jYXRjaCgoZXJyKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gIHByb2Nlc3MuZXhpdCgxKTtcbn0pO1xuIl19