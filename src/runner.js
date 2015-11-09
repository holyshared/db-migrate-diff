import { configLoader } from '../lib/config';
import { connect } from 'db-migrate';
import DiffDetector from './diff-detector';
import Promise from 'bluebird';

export default class Runner {
  constructor(argv) {
    this.argv = argv;
  }
  loadConfiguration() {
    return configLoader(
      this.argv.config,
      this.argv.env
    );
  }
  connect() {
    let config = this.loadConfiguration();
    return new Promise((resolve, reject) => {
      connect(config, (err, migrator) => {
        if (err) {
          return reject(err);
        }
        resolve(migrator.driver);
      });
    });
  }
  run() {
    return Promise.bind(this).then(() => {
      return this.connect();
    }).then((driver) => {
      let detector = DiffDetector.fromOptions({
        driver: driver,
        migrationsDir: this.argv.migrationsDir,
      });
      return detector.diffMigrations();
    });
  }
  static fromArgv(argv) {
    return new Runner(argv);
  }
}
