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
  process.exit();
})['catch'](function (err) {
  process.stderr.write(err.message);
  process.stderr.write(err.stack);
  process.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi1taWdyYXRlLWRpZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O29CQVdpQixRQUFROzs7O3NCQUNOLFVBQVU7Ozs7d0JBQ0QsWUFBWTs7OztBQUV4QyxJQUFJLElBQUksR0FBRyxrQkFBSyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFaEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDckIsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDOztBQUU1QyxvQkFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQzNDLE1BQUksUUFBUSxHQUFHLDJCQUFxQixDQUFDO0FBQ3JDLFFBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsU0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0NBQ2hCLENBQUMsU0FBTSxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQ2hCLFNBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsQyxTQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsU0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNqQixDQUFDLENBQUMiLCJmaWxlIjoiZGItbWlncmF0ZS1kaWZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAgZGItbWlncmF0ZS1kaWZmXG4gKlxuICogIFVzYWdlOiBkYi1taWdyYXRlLWRpZmYgW29wdGlvbnNdXG4gKiAgICBPcHRpb25zOlxuICogICAgICAtLWVudiwgLWUgICAgICAgICAgICAgICAgICAgVGhlIGVudmlyb25tZW50IHRvIHJ1biB0aGUgbWlncmF0aW9ucyB1bmRlci4gICAgW2RlZmF1bHQ6IFwiZGV2XCJdXG4gKiAgICAgIC0tbWlncmF0aW9ucy1kaXIsIC1tICAgICAgICBUaGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgeW91ciBtaWdyYXRpb24gZmlsZXMuICBbZGVmYXVsdDogXCIuL21pZ3JhdGlvbnNcIl1cbiAqICAgICAgLS1jb25maWcgICAgICAgICAgICAgICAgICAgIExvY2F0aW9uIG9mIHRoZSBkYXRhYmFzZS5qc29uIGZpbGUuICAgICAgICAgICAgIFtkZWZhdWx0OiBcIi4vZGF0YWJhc2UuanNvblwiXVxuICogICAgICAtLW1pZ3JhdGlvbi10YWJsZSAgICAgICAgICAgU2V0IHRoZSBuYW1lIG9mIHRoZSBtaWdyYXRpb24gdGFibGUuXG4gKi9cblxuaW1wb3J0IEFyZ3YgZnJvbSAnLi9hcmd2JztcbmltcG9ydCBSdW5uZXIgZnJvbSAnLi9ydW5uZXInO1xuaW1wb3J0IERlZmF1bHRSZXBvcnRlciBmcm9tICcuL3JlcG9ydGVyJztcblxubGV0IGFyZ3YgPSBBcmd2LmZyb21Bcmd2KHByb2Nlc3MuYXJndi5zbGljZSgyKSk7XG5cbmdsb2JhbC5tYXRjaGluZyA9ICcnO1xuZ2xvYmFsLm1pZ3JhdGlvblRhYmxlID0gYXJndi5taWdyYXRpb25UYWJsZTtcblxuUnVubmVyLmZyb21Bcmd2KGFyZ3YpLnJ1bigpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICBsZXQgcmVwb3J0ZXIgPSBuZXcgRGVmYXVsdFJlcG9ydGVyKCk7XG4gIHJlc3VsdC5yZXBvcnRUbyhyZXBvcnRlcik7XG4gIHByb2Nlc3MuZXhpdCgpO1xufSkuY2F0Y2goKGVycikgPT4ge1xuICBwcm9jZXNzLnN0ZGVyci53cml0ZShlcnIubWVzc2FnZSk7XG4gIHByb2Nlc3Muc3RkZXJyLndyaXRlKGVyci5zdGFjayk7XG4gIHByb2Nlc3MuZXhpdCgxKTtcbn0pO1xuIl19