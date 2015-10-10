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

var _libArgv = require('../lib/argv');

var _libArgv2 = _interopRequireDefault(_libArgv);

var _libConfig = require('../lib/config');

var _dbMigrate = require('db-migrate');

var _node_modulesDbMigrateLibMigrationJs = require('../node_modules/db-migrate/lib/migration.js');

var _node_modulesDbMigrateLibMigrationJs2 = _interopRequireDefault(_node_modulesDbMigrateLibMigrationJs);

var argv = _libArgv2['default'].fromArgv(process.argv.slice(2));
var config = (0, _libConfig.configLoader)(argv.config, argv.env);

// Hack for db-migrate
global.matching = '';
global.migrationTable = argv.migrationTable;

(0, _dbMigrate.connect)(config.getCurrent().settings, function (err, migrator) {

  // Load migration from local directory
  _node_modulesDbMigrateLibMigrationJs2['default'].loadFromFilesystem(argv.migrationsDir, function (err, results) {});

  // Load migration from database
  _node_modulesDbMigrateLibMigrationJs2['default'].loadFromDatabase(argv.migrationsDir, migrator.driver, function (err, results) {});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYi1taWdyYXRlLWRpZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3VCQVdpQixhQUFhOzs7O3lCQUNELGVBQWU7O3lCQUNwQixZQUFZOzttREFDZCw2Q0FBNkM7Ozs7QUFFbkUsSUFBSSxJQUFJLEdBQUcscUJBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEQsSUFBSSxNQUFNLEdBQUcsNkJBQWEsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7OztBQUdqRCxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNyQixNQUFNLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7O0FBRTVDLHdCQUFRLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFLOzs7QUFHdkQsbURBQVUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxVQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUssRUFDbEUsQ0FBQyxDQUFDOzs7QUFHSCxtREFBVSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFLLEVBQ2pGLENBQUMsQ0FBQztDQUVKLENBQUMsQ0FBQyIsImZpbGUiOiJkYi1taWdyYXRlLWRpZmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICBkYi1taWdyYXRlLWRpZmZcbiAqXG4gKiAgVXNhZ2U6IGRiLW1pZ3JhdGUtZGlmZiBbb3B0aW9uc11cbiAqICAgIE9wdGlvbnM6XG4gKiAgICAgIC0tZW52LCAtZSAgICAgICAgICAgICAgICAgICBUaGUgZW52aXJvbm1lbnQgdG8gcnVuIHRoZSBtaWdyYXRpb25zIHVuZGVyLiAgICBbZGVmYXVsdDogXCJkZXZcIl1cbiAqICAgICAgLS1taWdyYXRpb25zLWRpciwgLW0gICAgICAgIFRoZSBkaXJlY3RvcnkgY29udGFpbmluZyB5b3VyIG1pZ3JhdGlvbiBmaWxlcy4gIFtkZWZhdWx0OiBcIi4vbWlncmF0aW9uc1wiXVxuICogICAgICAtLWNvbmZpZyAgICAgICAgICAgICAgICAgICAgTG9jYXRpb24gb2YgdGhlIGRhdGFiYXNlLmpzb24gZmlsZS4gICAgICAgICAgICAgW2RlZmF1bHQ6IFwiLi9kYXRhYmFzZS5qc29uXCJdXG4gKiAgICAgIC0tbWlncmF0aW9uLXRhYmxlICAgICAgICAgICBTZXQgdGhlIG5hbWUgb2YgdGhlIG1pZ3JhdGlvbiB0YWJsZS5cbiAqL1xuXG5pbXBvcnQgQXJndiBmcm9tICcuLi9saWIvYXJndic7XG5pbXBvcnQgeyBjb25maWdMb2FkZXIgfSBmcm9tICcuLi9saWIvY29uZmlnJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdkYi1taWdyYXRlJztcbmltcG9ydCBNaWdyYXRpb24gZnJvbSAnLi4vbm9kZV9tb2R1bGVzL2RiLW1pZ3JhdGUvbGliL21pZ3JhdGlvbi5qcyc7XG5cbmxldCBhcmd2ID0gQXJndi5mcm9tQXJndihwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpO1xubGV0IGNvbmZpZyA9IGNvbmZpZ0xvYWRlcihhcmd2LmNvbmZpZywgYXJndi5lbnYpO1xuXG4vLyBIYWNrIGZvciBkYi1taWdyYXRlXG5nbG9iYWwubWF0Y2hpbmcgPSAnJztcbmdsb2JhbC5taWdyYXRpb25UYWJsZSA9IGFyZ3YubWlncmF0aW9uVGFibGU7XG5cbmNvbm5lY3QoY29uZmlnLmdldEN1cnJlbnQoKS5zZXR0aW5ncywgKGVyciwgbWlncmF0b3IpID0+IHtcblxuICAvLyBMb2FkIG1pZ3JhdGlvbiBmcm9tIGxvY2FsIGRpcmVjdG9yeVxuICBNaWdyYXRpb24ubG9hZEZyb21GaWxlc3lzdGVtKGFyZ3YubWlncmF0aW9uc0RpciwgKGVyciwgcmVzdWx0cykgPT4ge1xuICB9KTtcblxuICAvLyBMb2FkIG1pZ3JhdGlvbiBmcm9tIGRhdGFiYXNlXG4gIE1pZ3JhdGlvbi5sb2FkRnJvbURhdGFiYXNlKGFyZ3YubWlncmF0aW9uc0RpciwgbWlncmF0b3IuZHJpdmVyLCAoZXJyLCByZXN1bHRzKSA9PiB7XG4gIH0pO1xuXG59KTtcbiJdfQ==