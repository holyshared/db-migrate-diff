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
    let keys = [];
    keys = keys.concat(this.local.map((item) => item.name));
    keys = keys.concat(this.remote.map((item) => item.name));
    keys.forEach((key) => { this.result[key] = { local: {}, remote: {} }; }, this);

    this.local.forEach((local) => {
      this.result[local.name].local = local;
    }, this);
    this.remote.forEach((remote) => {
      this.result[remote.name].remote = remote;
    }, this);
  }
  get diff() {
    return this.result;
  }
  reportTo(reporter) {
    reporter.report(this);
  }
}
