export default class AbstractReporter {
  report(result) {
    throw new NotImplementedError('Please implement the report method');
  }
}

export class NotImplementedError extends Error {
  constructor() {
    super();
  }
}
