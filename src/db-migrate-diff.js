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
import DefaultReporter from './reporter';

let argv = Argv.fromArgv(process.argv.slice(2));

global.matching = '';
global.migrationTable = argv.migrationTable;

Runner.fromArgv(argv).run().then((result) => {
  let reporter = new DefaultReporter();
  result.reportTo(reporter);
  process.stdout.write('The difference detection was successful.\n');
  process.exit();
}).catch((err) => {
  process.stderr.write(err.message);
  process.stderr.write(err.stack);
  process.exit(1);
});
