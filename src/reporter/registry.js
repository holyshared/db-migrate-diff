export default class ReporterRegistry {
  constructor() {
    this.reporters = {};
  }
  register(name, reporter) {
    if (this.reporters[name]) {
      throw new AlreadyRegisteredError(name + ' is already registered');
    }
    this.reporters[name] = reporter;
  }
  lookup(name) {
    return this.reporters[name];
  }
}

export class NotRegisteredError extends Error {
  constructor() {
    super();
  }
}

export class AlreadyRegisteredError extends Error {
  constructor() {
    super();
  }
}
