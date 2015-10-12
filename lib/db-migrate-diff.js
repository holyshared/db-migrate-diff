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
  var Reporter = _reporter2['default'].lookup(argv.reporter);
  result.reportTo(new Reporter());

  process.stdout.write('The difference detection was successful.\n');
  process.exit();
})['catch'](function (err) {
  process.stderr.write(err.message);
  process.stderr.write(err.stack);
  process.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi1taWdyYXRlLWRpZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O29CQVdpQixRQUFROzs7O3NCQUNOLFVBQVU7Ozs7d0JBQ1IsWUFBWTs7OztBQUVqQyxJQUFJLElBQUksR0FBRyxrQkFBSyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFaEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDckIsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDOztBQUU1QyxvQkFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQzNDLE1BQUksUUFBUSxHQUFHLHNCQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsUUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7O0FBRWhDLFNBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7QUFDbkUsU0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0NBQ2hCLENBQUMsU0FBTSxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQ2hCLFNBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsQyxTQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsU0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNqQixDQUFDLENBQUMiLCJmaWxlIjoiZGItbWlncmF0ZS1kaWZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAgZGItbWlncmF0ZS1kaWZmXG4gKlxuICogIFVzYWdlOiBkYi1taWdyYXRlLWRpZmYgW29wdGlvbnNdXG4gKiAgICBPcHRpb25zOlxuICogICAgICAtLWVudiwgLWUgICAgICAgICAgICAgICAgICAgVGhlIGVudmlyb25tZW50IHRvIHJ1biB0aGUgbWlncmF0aW9ucyB1bmRlci4gICAgW2RlZmF1bHQ6IFwiZGV2XCJdXG4gKiAgICAgIC0tbWlncmF0aW9ucy1kaXIsIC1tICAgICAgICBUaGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgeW91ciBtaWdyYXRpb24gZmlsZXMuICBbZGVmYXVsdDogXCIuL21pZ3JhdGlvbnNcIl1cbiAqICAgICAgLS1jb25maWcgICAgICAgICAgICAgICAgICAgIExvY2F0aW9uIG9mIHRoZSBkYXRhYmFzZS5qc29uIGZpbGUuICAgICAgICAgICAgIFtkZWZhdWx0OiBcIi4vZGF0YWJhc2UuanNvblwiXVxuICogICAgICAtLW1pZ3JhdGlvbi10YWJsZSAgICAgICAgICAgU2V0IHRoZSBuYW1lIG9mIHRoZSBtaWdyYXRpb24gdGFibGUuXG4gKi9cblxuaW1wb3J0IEFyZ3YgZnJvbSAnLi9hcmd2JztcbmltcG9ydCBSdW5uZXIgZnJvbSAnLi9ydW5uZXInO1xuaW1wb3J0IHJlZ2lzdHJ5IGZyb20gJy4vcmVwb3J0ZXInO1xuXG5sZXQgYXJndiA9IEFyZ3YuZnJvbUFyZ3YocHJvY2Vzcy5hcmd2LnNsaWNlKDIpKTtcblxuZ2xvYmFsLm1hdGNoaW5nID0gJyc7XG5nbG9iYWwubWlncmF0aW9uVGFibGUgPSBhcmd2Lm1pZ3JhdGlvblRhYmxlO1xuXG5SdW5uZXIuZnJvbUFyZ3YoYXJndikucnVuKCkudGhlbigocmVzdWx0KSA9PiB7XG4gIGxldCBSZXBvcnRlciA9IHJlZ2lzdHJ5Lmxvb2t1cChhcmd2LnJlcG9ydGVyKTtcbiAgcmVzdWx0LnJlcG9ydFRvKG5ldyBSZXBvcnRlcigpKTtcblxuICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnVGhlIGRpZmZlcmVuY2UgZGV0ZWN0aW9uIHdhcyBzdWNjZXNzZnVsLlxcbicpO1xuICBwcm9jZXNzLmV4aXQoKTtcbn0pLmNhdGNoKChlcnIpID0+IHtcbiAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoZXJyLm1lc3NhZ2UpO1xuICBwcm9jZXNzLnN0ZGVyci53cml0ZShlcnIuc3RhY2spO1xuICBwcm9jZXNzLmV4aXQoMSk7XG59KTtcbiJdfQ==