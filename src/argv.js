import argvParser from 'minimist';

export default class Argv {
  constructor(argv) {
    this.argv = argvParser(argv, {
      string: [
        'env', 'e',
        'migrations-dir', 'm',
        'config',
        'migration-table'
      ],
      alias: {
        m: 'migrationsDir',
        e: 'env',
        'migrations-dir': 'migrationsDir',
        'migration-table': 'migrationTable'
      },
      default: {
        env: 'dev',
        config: process.cwd() + '/database.json',
        migrationsDir: './migrations',
        migrationTable: 'migrations'
      }
    });
  }
  get config() {
    return this.argv.config;
  }
  get env() {
    return this.argv.env;
  }
  get migrationsDir() {
    return this.argv.migrationsDir;
  }
  get migrationTable() {
    return this.argv.migrationTable;
  }
  static fromArgv(argv) {
    return new Argv(argv);
  }
  static defaultArgv() {
    return new Argv([]);
  }
}
