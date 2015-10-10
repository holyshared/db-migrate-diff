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

var argv = _argv2['default'].fromArgv(process.argv.slice(2));

global.matching = '';
global.migrationTable = argv.migrationTable;

_runner2['default'].fromArgv(argv).run().then(function (results) {
  process.exit();
})['catch'](function (err) {
  process.stderr.write(err.message);
  process.stderr.write(err.stack);
  process.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi1taWdyYXRlLWRpZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O29CQVdpQixRQUFROzs7O3NCQUNOLFVBQVU7Ozs7QUFFN0IsSUFBSSxJQUFJLEdBQUcsa0JBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWhELE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7QUFFNUMsb0JBQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU8sRUFBSztBQUM1QyxTQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDaEIsQ0FBQyxTQUFNLENBQUMsVUFBQyxHQUFHLEVBQUs7QUFDaEIsU0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLFNBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxTQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2pCLENBQUMsQ0FBQyIsImZpbGUiOiJkYi1taWdyYXRlLWRpZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICBkYi1taWdyYXRlLWRpZmZcbiAqXG4gKiAgVXNhZ2U6IGRiLW1pZ3JhdGUtZGlmZiBbb3B0aW9uc11cbiAqICAgIE9wdGlvbnM6XG4gKiAgICAgIC0tZW52LCAtZSAgICAgICAgICAgICAgICAgICBUaGUgZW52aXJvbm1lbnQgdG8gcnVuIHRoZSBtaWdyYXRpb25zIHVuZGVyLiAgICBbZGVmYXVsdDogXCJkZXZcIl1cbiAqICAgICAgLS1taWdyYXRpb25zLWRpciwgLW0gICAgICAgIFRoZSBkaXJlY3RvcnkgY29udGFpbmluZyB5b3VyIG1pZ3JhdGlvbiBmaWxlcy4gIFtkZWZhdWx0OiBcIi4vbWlncmF0aW9uc1wiXVxuICogICAgICAtLWNvbmZpZyAgICAgICAgICAgICAgICAgICAgTG9jYXRpb24gb2YgdGhlIGRhdGFiYXNlLmpzb24gZmlsZS4gICAgICAgICAgICAgW2RlZmF1bHQ6IFwiLi9kYXRhYmFzZS5qc29uXCJdXG4gKiAgICAgIC0tbWlncmF0aW9uLXRhYmxlICAgICAgICAgICBTZXQgdGhlIG5hbWUgb2YgdGhlIG1pZ3JhdGlvbiB0YWJsZS5cbiAqL1xuXG5pbXBvcnQgQXJndiBmcm9tICcuL2FyZ3YnO1xuaW1wb3J0IFJ1bm5lciBmcm9tICcuL3J1bm5lcic7XG5cbmxldCBhcmd2ID0gQXJndi5mcm9tQXJndihwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpO1xuXG5nbG9iYWwubWF0Y2hpbmcgPSAnJztcbmdsb2JhbC5taWdyYXRpb25UYWJsZSA9IGFyZ3YubWlncmF0aW9uVGFibGU7XG5cblJ1bm5lci5mcm9tQXJndihhcmd2KS5ydW4oKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gIHByb2Nlc3MuZXhpdCgpO1xufSkuY2F0Y2goKGVycikgPT4ge1xuICBwcm9jZXNzLnN0ZGVyci53cml0ZShlcnIubWVzc2FnZSk7XG4gIHByb2Nlc3Muc3RkZXJyLndyaXRlKGVyci5zdGFjayk7XG4gIHByb2Nlc3MuZXhpdCgxKTtcbn0pO1xuIl19