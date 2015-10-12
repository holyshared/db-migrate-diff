//import Table from 'cli-table';
import AbstractReporter from './abstract-reporter';
import console from '../console';
import { basename } from 'path';

export default class GhostReporter extends AbstractReporter {
  constructor() {
    super();

/*
    this.table = new Table({
      head: [ 'Local', 'Remote' ],
      colWidths: [ 40, 40 ],
      style: {
        head: [ 'white' ]
      }
    });
    */
  }
  report(result) {
    if (result.noDiffDeleted) {
      console.info('The difference of migration was not detected.');
      return;
    }
    let detectedDiff = result.detectedDiff;
    let ghostFiles = [];

    Object.keys(detectedDiff).forEach((name) => {
      let diff = detectedDiff[name];
      let localFile = diff.local.path || null;
      let remoteFile = diff.remote.path || '';

      if (localFile === null && remoteFile) {
        ghostFiles.push(remoteFile);
      }
    }, this);

    if (ghostFiles.length <= 0) {
      return;
    }

    console.warn('WARNING');
    console.warn('────────────────────────────────────────');
    console.warn('The applied migration could not find from the local.');
    console.warn('Someone may have been deleted from the repository.');
    console.warn('Please be careful when applying the migration.\n');

    ghostFiles.forEach(function (remoteFile) {
      console.warn('* ' + remoteFile + '(.js|.coffee)');
    });

    console.warn('');
  }
}
