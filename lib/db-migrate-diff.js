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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argv = require('./argv');

var _argv2 = _interopRequireDefault(_argv);

var _runner = require('./runner');

var _runner2 = _interopRequireDefault(_runner);

var _reporter = require('./reporter');

var _reporter2 = _interopRequireDefault(_reporter);

var _console = require('./console');

var _console2 = _interopRequireDefault(_console);

var argv = _argv2['default'].fromArgv(process.argv.slice(2));

global.matching = '';
global.migrationTable = argv.migrationTable;

_runner2['default'].fromArgv(argv).run().then(function (result) {
  var Reporter = _reporter2['default'].lookup(argv.reporter);
  result.reportTo(new Reporter());

  _console2['default'].ok('The difference detection was successful.');
  process.exit();
})['catch'](function (err) {
  _console2['default'].error(err.message);
  _console2['default'].error(err.stack);
  process.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi1taWdyYXRlLWRpZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O29CQVdpQixRQUFROzs7O3NCQUNOLFVBQVU7Ozs7d0JBQ1IsWUFBWTs7Ozt1QkFDYixXQUFXOzs7O0FBRS9CLElBQUksSUFBSSxHQUFHLGtCQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVoRCxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNyQixNQUFNLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7O0FBRTVDLG9CQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNLEVBQUs7QUFDM0MsTUFBSSxRQUFRLEdBQUcsc0JBQVMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QyxRQUFNLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQzs7QUFFaEMsdUJBQVEsRUFBRSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7QUFDdkQsU0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0NBQ2hCLENBQUMsU0FBTSxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQ2hCLHVCQUFRLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0IsdUJBQVEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixTQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2pCLENBQUMsQ0FBQyIsImZpbGUiOiJkYi1taWdyYXRlLWRpZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICBkYi1taWdyYXRlLWRpZmZcbiAqXG4gKiAgVXNhZ2U6IGRiLW1pZ3JhdGUtZGlmZiBbb3B0aW9uc11cbiAqICAgIE9wdGlvbnM6XG4gKiAgICAgIC0tZW52LCAtZSAgICAgICAgICAgICAgICAgICBUaGUgZW52aXJvbm1lbnQgdG8gcnVuIHRoZSBtaWdyYXRpb25zIHVuZGVyLiAgICBbZGVmYXVsdDogXCJkZXZcIl1cbiAqICAgICAgLS1taWdyYXRpb25zLWRpciwgLW0gICAgICAgIFRoZSBkaXJlY3RvcnkgY29udGFpbmluZyB5b3VyIG1pZ3JhdGlvbiBmaWxlcy4gIFtkZWZhdWx0OiBcIi4vbWlncmF0aW9uc1wiXVxuICogICAgICAtLWNvbmZpZyAgICAgICAgICAgICAgICAgICAgTG9jYXRpb24gb2YgdGhlIGRhdGFiYXNlLmpzb24gZmlsZS4gICAgICAgICAgICAgW2RlZmF1bHQ6IFwiLi9kYXRhYmFzZS5qc29uXCJdXG4gKiAgICAgIC0tbWlncmF0aW9uLXRhYmxlICAgICAgICAgICBTZXQgdGhlIG5hbWUgb2YgdGhlIG1pZ3JhdGlvbiB0YWJsZS5cbiAqL1xuXG5pbXBvcnQgQXJndiBmcm9tICcuL2FyZ3YnO1xuaW1wb3J0IFJ1bm5lciBmcm9tICcuL3J1bm5lcic7XG5pbXBvcnQgcmVnaXN0cnkgZnJvbSAnLi9yZXBvcnRlcic7XG5pbXBvcnQgY29uc29sZSBmcm9tICcuL2NvbnNvbGUnO1xuXG5sZXQgYXJndiA9IEFyZ3YuZnJvbUFyZ3YocHJvY2Vzcy5hcmd2LnNsaWNlKDIpKTtcblxuZ2xvYmFsLm1hdGNoaW5nID0gJyc7XG5nbG9iYWwubWlncmF0aW9uVGFibGUgPSBhcmd2Lm1pZ3JhdGlvblRhYmxlO1xuXG5SdW5uZXIuZnJvbUFyZ3YoYXJndikucnVuKCkudGhlbigocmVzdWx0KSA9PiB7XG4gIGxldCBSZXBvcnRlciA9IHJlZ2lzdHJ5Lmxvb2t1cChhcmd2LnJlcG9ydGVyKTtcbiAgcmVzdWx0LnJlcG9ydFRvKG5ldyBSZXBvcnRlcigpKTtcblxuICBjb25zb2xlLm9rKCdUaGUgZGlmZmVyZW5jZSBkZXRlY3Rpb24gd2FzIHN1Y2Nlc3NmdWwuJyk7XG4gIHByb2Nlc3MuZXhpdCgpO1xufSkuY2F0Y2goKGVycikgPT4ge1xuICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spO1xuICBwcm9jZXNzLmV4aXQoMSk7XG59KTtcbiJdfQ==