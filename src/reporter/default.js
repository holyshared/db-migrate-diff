import Table from 'cli-table';
import AbstractReporter from './abstract-reporter';
import console from '../console';
import { basename } from 'path';

export default class DefaultReporter extends AbstractReporter {
  constructor() {
    super();
    this.table = new Table({
      head: [ 'Local', 'Remote' ],
      colWidths: [ 40, 40 ],
      style: {
        head: [ 'white' ]
      }
    });
  }
  report(result) {
    if (result.noDiffDeleted) {
      console.info('The difference of migration was not detected.');
      return;
    }
    let detectedDiff = result.detectedDiff;

    Object.keys(detectedDiff).forEach((name) => {
      let diff = detectedDiff[name];
      let localFile = diff.local.path || '';
      let remoteFile = diff.remote.path || '';

      this.table.push([
        basename(localFile),
        basename(remoteFile)
      ]);
    }, this);
    console.log(this.table.toString() + '\n');
  }
}
