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

import Argv from '../lib/argv';
import { configLoader } from '../lib/config';
import { connect } from 'db-migrate';
import Migration from '../node_modules/db-migrate/lib/migration.js';

let argv = Argv.fromArgv(process.argv.slice(2));
let config = configLoader(argv.config, argv.env);

// Hack for db-migrate
global.matching = '';
global.migrationTable = argv.migrationTable;

connect(config.getCurrent().settings, (err, migrator) => {

  // Load migration from local directory
  Migration.loadFromFilesystem(argv.migrationsDir, (err, results) => {
  });

  // Load migration from database
  Migration.loadFromDatabase(argv.migrationsDir, migrator.driver, (err, results) => {
  });

});
