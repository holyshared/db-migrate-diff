'use strict';

import argvParser from 'minimist';

export default class Argv {
  constructor(argv) {
    this.argv = argvParser(argv, {
      string: [
        'env', 'e',
        'migrations-dir', 'm',
        'config',
        'migration-table', 't',
        'reporter', 'r'
      ],
      alias: {
        m: 'migrationsDir',
        t: 'migrationTable',
        e: 'env',
        r: 'reporter',
        'migrations-dir': 'migrationsDir',
        'migration-table': 'migrationTable'
      },
      default: {
        env: 'dev',
        config: process.cwd() + '/database.json',
        migrationsDir: './migrations',
        migrationTable: 'migrations',
        reporter: 'default'
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
  get reporter() {
    return this.argv.reporter;
  }
  static fromArgv(argv) {
    return new Argv(argv);
  }
  static defaultArgv() {
    return new Argv([]);
  }
}
