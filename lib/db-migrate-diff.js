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

_console2['default'].info('\n MIGRATIONS DIFF');
_console2['default'].info('────────────────────────────────────────');
_console2['default'].info(' environment: %s', argv.env);
_console2['default'].info('   directory: %s', argv.migrationsDir);
_console2['default'].info('       table: %s', argv.migrationTable);
_console2['default'].info('    reporter: %s', argv.reporter);
_console2['default'].info('');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi1taWdyYXRlLWRpZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O29CQVdpQixRQUFROzs7O3NCQUNOLFVBQVU7Ozs7d0JBQ1IsWUFBWTs7Ozt1QkFDYixXQUFXOzs7O0FBRS9CLElBQUksSUFBSSxHQUFHLGtCQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVoRCxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNyQixNQUFNLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7O0FBRTVDLHFCQUFRLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ25DLHFCQUFRLElBQUksQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0FBQ3pELHFCQUFRLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0MscUJBQVEsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNyRCxxQkFBUSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RELHFCQUFRLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQscUJBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUVqQixvQkFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQzNDLE1BQUksUUFBUSxHQUFHLHNCQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsUUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7O0FBRWhDLHVCQUFRLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0FBQ3ZELFNBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztDQUNoQixDQUFDLFNBQU0sQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUNoQix1QkFBUSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLHVCQUFRLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsU0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNqQixDQUFDLENBQUMiLCJmaWxlIjoiZGItbWlncmF0ZS1kaWZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAgZGItbWlncmF0ZS1kaWZmXG4gKlxuICogIFVzYWdlOiBkYi1taWdyYXRlLWRpZmYgW29wdGlvbnNdXG4gKiAgICBPcHRpb25zOlxuICogICAgICAtLWVudiwgLWUgICAgICAgICAgICAgICAgICAgVGhlIGVudmlyb25tZW50IHRvIHJ1biB0aGUgbWlncmF0aW9ucyB1bmRlci4gICAgW2RlZmF1bHQ6IFwiZGV2XCJdXG4gKiAgICAgIC0tbWlncmF0aW9ucy1kaXIsIC1tICAgICAgICBUaGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgeW91ciBtaWdyYXRpb24gZmlsZXMuICBbZGVmYXVsdDogXCIuL21pZ3JhdGlvbnNcIl1cbiAqICAgICAgLS1jb25maWcgICAgICAgICAgICAgICAgICAgIExvY2F0aW9uIG9mIHRoZSBkYXRhYmFzZS5qc29uIGZpbGUuICAgICAgICAgICAgIFtkZWZhdWx0OiBcIi4vZGF0YWJhc2UuanNvblwiXVxuICogICAgICAtLW1pZ3JhdGlvbi10YWJsZSAgICAgICAgICAgU2V0IHRoZSBuYW1lIG9mIHRoZSBtaWdyYXRpb24gdGFibGUuXG4gKi9cblxuaW1wb3J0IEFyZ3YgZnJvbSAnLi9hcmd2JztcbmltcG9ydCBSdW5uZXIgZnJvbSAnLi9ydW5uZXInO1xuaW1wb3J0IHJlZ2lzdHJ5IGZyb20gJy4vcmVwb3J0ZXInO1xuaW1wb3J0IGNvbnNvbGUgZnJvbSAnLi9jb25zb2xlJztcblxubGV0IGFyZ3YgPSBBcmd2LmZyb21Bcmd2KHByb2Nlc3MuYXJndi5zbGljZSgyKSk7XG5cbmdsb2JhbC5tYXRjaGluZyA9ICcnO1xuZ2xvYmFsLm1pZ3JhdGlvblRhYmxlID0gYXJndi5taWdyYXRpb25UYWJsZTtcblxuY29uc29sZS5pbmZvKCdcXG4gTUlHUkFUSU9OUyBESUZGJyk7XG5jb25zb2xlLmluZm8oJ+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCcpO1xuY29uc29sZS5pbmZvKCcgZW52aXJvbm1lbnQ6ICVzJywgYXJndi5lbnYpO1xuY29uc29sZS5pbmZvKCcgICBkaXJlY3Rvcnk6ICVzJywgYXJndi5taWdyYXRpb25zRGlyKTtcbmNvbnNvbGUuaW5mbygnICAgICAgIHRhYmxlOiAlcycsIGFyZ3YubWlncmF0aW9uVGFibGUpO1xuY29uc29sZS5pbmZvKCcgICAgcmVwb3J0ZXI6ICVzJywgYXJndi5yZXBvcnRlcik7XG5jb25zb2xlLmluZm8oJycpO1xuXG5SdW5uZXIuZnJvbUFyZ3YoYXJndikucnVuKCkudGhlbigocmVzdWx0KSA9PiB7XG4gIGxldCBSZXBvcnRlciA9IHJlZ2lzdHJ5Lmxvb2t1cChhcmd2LnJlcG9ydGVyKTtcbiAgcmVzdWx0LnJlcG9ydFRvKG5ldyBSZXBvcnRlcigpKTtcblxuICBjb25zb2xlLm9rKCdUaGUgZGlmZmVyZW5jZSBkZXRlY3Rpb24gd2FzIHN1Y2Nlc3NmdWwuJyk7XG4gIHByb2Nlc3MuZXhpdCgpO1xufSkuY2F0Y2goKGVycikgPT4ge1xuICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spO1xuICBwcm9jZXNzLmV4aXQoMSk7XG59KTtcbiJdfQ==