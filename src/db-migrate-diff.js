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

import Argv from './argv';
import Runner from './runner';
import registry from './reporter';
import console from './console';

let argv = Argv.fromArgv(process.argv.slice(2));

global.matching = '';
global.migrationTable = argv.migrationTable;

Runner.fromArgv(argv).run().then((result) => {
  let Reporter = registry.lookup(argv.reporter);
  result.reportTo(new Reporter());

  console.ok('The difference detection was successful.');
  process.exit();
}).catch((err) => {
  console.error(err.message);
  console.error(err.stack);
  process.exit(1);
});
