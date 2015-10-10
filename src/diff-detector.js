import { configLoader } from '../lib/config';
import { connect } from 'db-migrate';
import Promise from 'bluebird';
import migration from '../node_modules/db-migrate/lib/migration.js';

export default class DiffDetector {
  constructor(options) {
    let opts = options || {};
    this.driver = opts.driver;
    this.migrationsDir = opts.migrationsDir;
  }
  loadFromFilesystem() {
    let migrationsDir = this.migrationsDir;

    return new Promise((resolve, reject) => {
      Migration.loadFromFilesystem(migrationsDir, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }
  loadFromDatabase() {
    let driver = this.driver;
    let migrationsDir = this.migrationsDir;

    return new Promise((resolve, reject) => {
      Migration.loadFromDatabase(migrationsDir, driver, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }
  diffMigrations() {
    return Promise.props({
      local: this.loadFromFilesystem(),
      remote: this.loadFromDatabase()
    }).then((result) => {
      return new DiffResult(result);
    });
  }
  static fromOptions(options) {
    return new DiffDetector(options);
  }
}

export class DiffResult {
  constructor(result) {
    this.result = {};
    this.local = result.local;
    this.remote = result.remote;
    this.init();
  }
  init() {
    this.local.forEach((local) => {
      this[local.name] = this[local.name] || { local: null };
      this[local.name].local = local;
    }, this.result);
    this.remote.forEach((remote) => {
      this[remote.name] = this[remote.name] || { remote: null };
      this[remote.name].remote = remote;
    }, this.result);
  }
  get diff() {
    return this.result;
  }
  reportTo(reporter) {
    reporter.report(this);
  }
}
