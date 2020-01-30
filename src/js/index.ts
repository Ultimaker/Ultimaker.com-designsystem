import 'babel-polyfill';

// >>> ordering of this import matters
import '../scss/ultimaker.scss';
import ComponentRegistry from 'plugins/component-registry';
import '../scss/utilities/_all.scss';
import ClickOutside from './directives/click-outside';
// <<< ordering of this import matters

const registry = new ComponentRegistry();

registry.registerDirective(ClickOutside);

export { default as Defaults } from 'constants/defaults';
export { default as BrowserCapabilities } from 'utils/browser-capabilities';
export { default as TextUtils } from 'utils/text-utils';
export { default as ViewportUtility } from 'utils/viewport';
export { default as PublicEventService } from 'plugins/public-event-service';
export { registry };
