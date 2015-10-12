import Table from 'cli-table';

export default class DefaultReporter {
  constructor() {
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
