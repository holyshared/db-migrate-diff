import DefaultReporter from './default';
import { ReporterRegistry, NotRegisteredError, AlreadyRegisteredError } from './registry';

export let registry = new ReporterRegistry();
export let ReporterNotRegisteredError = NotRegisteredError;
export let ReporterAlreadyRegisteredError = AlreadyRegisteredError;
export default registry;

registry.register('default', DefaultReporter);
