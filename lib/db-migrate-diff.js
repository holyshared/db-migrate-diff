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

var argv = _argv2['default'].fromArgv(process.argv.slice(2));

global.matching = '';
global.migrationTable = argv.migrationTable;

_runner2['default'].fromArgv(argv).run().then(function (result) {
  var reporter = new _reporter2['default']();
  result.reportTo(reporter);
  process.stdout.write('The difference detection was successful.\n');
  process.exit();
})['catch'](function (err) {
  process.stderr.write(err.message);
  process.stderr.write(err.stack);
  process.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi1taWdyYXRlLWRpZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O29CQVdpQixRQUFROzs7O3NCQUNOLFVBQVU7Ozs7d0JBQ0QsWUFBWTs7OztBQUV4QyxJQUFJLElBQUksR0FBRyxrQkFBSyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFaEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDckIsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDOztBQUU1QyxvQkFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQzNDLE1BQUksUUFBUSxHQUFHLDJCQUFxQixDQUFDO0FBQ3JDLFFBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsU0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztBQUNuRSxTQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDaEIsQ0FBQyxTQUFNLENBQUMsVUFBQyxHQUFHLEVBQUs7QUFDaEIsU0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLFNBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxTQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2pCLENBQUMsQ0FBQyIsImZpbGUiOiJkYi1taWdyYXRlLWRpZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICBkYi1taWdyYXRlLWRpZmZcbiAqXG4gKiAgVXNhZ2U6IGRiLW1pZ3JhdGUtZGlmZiBbb3B0aW9uc11cbiAqICAgIE9wdGlvbnM6XG4gKiAgICAgIC0tZW52LCAtZSAgICAgICAgICAgICAgICAgICBUaGUgZW52aXJvbm1lbnQgdG8gcnVuIHRoZSBtaWdyYXRpb25zIHVuZGVyLiAgICBbZGVmYXVsdDogXCJkZXZcIl1cbiAqICAgICAgLS1taWdyYXRpb25zLWRpciwgLW0gICAgICAgIFRoZSBkaXJlY3RvcnkgY29udGFpbmluZyB5b3VyIG1pZ3JhdGlvbiBmaWxlcy4gIFtkZWZhdWx0OiBcIi4vbWlncmF0aW9uc1wiXVxuICogICAgICAtLWNvbmZpZyAgICAgICAgICAgICAgICAgICAgTG9jYXRpb24gb2YgdGhlIGRhdGFiYXNlLmpzb24gZmlsZS4gICAgICAgICAgICAgW2RlZmF1bHQ6IFwiLi9kYXRhYmFzZS5qc29uXCJdXG4gKiAgICAgIC0tbWlncmF0aW9uLXRhYmxlICAgICAgICAgICBTZXQgdGhlIG5hbWUgb2YgdGhlIG1pZ3JhdGlvbiB0YWJsZS5cbiAqL1xuXG5pbXBvcnQgQXJndiBmcm9tICcuL2FyZ3YnO1xuaW1wb3J0IFJ1bm5lciBmcm9tICcuL3J1bm5lcic7XG5pbXBvcnQgRGVmYXVsdFJlcG9ydGVyIGZyb20gJy4vcmVwb3J0ZXInO1xuXG5sZXQgYXJndiA9IEFyZ3YuZnJvbUFyZ3YocHJvY2Vzcy5hcmd2LnNsaWNlKDIpKTtcblxuZ2xvYmFsLm1hdGNoaW5nID0gJyc7XG5nbG9iYWwubWlncmF0aW9uVGFibGUgPSBhcmd2Lm1pZ3JhdGlvblRhYmxlO1xuXG5SdW5uZXIuZnJvbUFyZ3YoYXJndikucnVuKCkudGhlbigocmVzdWx0KSA9PiB7XG4gIGxldCByZXBvcnRlciA9IG5ldyBEZWZhdWx0UmVwb3J0ZXIoKTtcbiAgcmVzdWx0LnJlcG9ydFRvKHJlcG9ydGVyKTtcbiAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1RoZSBkaWZmZXJlbmNlIGRldGVjdGlvbiB3YXMgc3VjY2Vzc2Z1bC5cXG4nKTtcbiAgcHJvY2Vzcy5leGl0KCk7XG59KS5jYXRjaCgoZXJyKSA9PiB7XG4gIHByb2Nlc3Muc3RkZXJyLndyaXRlKGVyci5tZXNzYWdlKTtcbiAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoZXJyLnN0YWNrKTtcbiAgcHJvY2Vzcy5leGl0KDEpO1xufSk7XG4iXX0=