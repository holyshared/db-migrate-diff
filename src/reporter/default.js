import Table from 'cli-table';
import AbstractReporter from './abstract-reporter';
import console from '../console';

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
      this.table.push([
        diff.local.name || '',
        diff.remote.name || ''
      ]);
    }, this);
    console.log(this.table.toString());
  }
}
