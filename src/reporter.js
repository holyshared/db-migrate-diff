import Table from 'cli-table';

export class Reporter {
  report(result) {
    throw new Error('Please implement the report method');
  }
}

export default class DefaultReporter extends Reporter {
  constructor() {
    super();
    this.table = new Table({
      head: [ 'Local', 'Remote' ],
      colWidths: [ 40, 40 ]
    });
  }
  report(result) {
    if (result.noDiffDeleted) {
      process.stdout.write('\nThe difference of migration was not detected.\n');
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

    process.stdout.write(this.table.toString() + '\n');
  }
}
