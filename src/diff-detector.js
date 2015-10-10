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
    });
  }
  static fromOptions(options) {
    return new DiffDetector(options);
  }
}
