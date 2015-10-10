import Table from 'cli-table';

export default class DefaultReporter {
  constructor() {
    this.table = new Table({
      head: [ 'Local', 'Remote' ],
      colWidths: [ 40, 40 ]
    });
  }
  report(result) {
    let diffRecords = result.diff;

    Object.keys(diffRecords).forEach((name) => {
      let diff = diffRecords[name];
      this.table.push([
        diff.local.name || '',
        diff.remote.name || ''
      ]);
    }, this);

    process.stdout.write(this.table.toString());
  }
}
