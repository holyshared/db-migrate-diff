'use strict';

import { config } from 'db-migrate';

export function configLoader(fileName, env) {
  config.load(fileName, env);
  return config.getCurrent().settings;
}
