import argvParser from 'minimist';

export default class Argv {
  constructor(argv) {
    this.argv = argvParser(argv);
  }
  get config() {
    return this.argv.config;
  }
  get env() {
    return this.argv.env;
  }
  get migrationsDir() {
    return this.argv['migrations-dir'];
  }
  get migrationTable() {
    return this.argv['migration-table'];
  }
  static fromArgv(argv) {
    return new Argv(argv);
  }
}
