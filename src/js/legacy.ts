import 'babel-polyfill';

// >>> ordering of these imports matters
import '../scss/component-library.scss';
import ComponentRegistry from 'plugins/component-registry';
import Components from './components';
import '../scss/utilities/_all.scss';
import ClickOutside from './directives/click-outside';
// <<< ordering of these imports matters

const registry = new ComponentRegistry();

Object.keys(Components).forEach((c) => {
    registry.registerComponent(Components[c]);
});

registry.registerDirective(ClickOutside);

export { default as Defaults } from 'constants/defaults';
export { default as BrowserCapabilities } from 'utils/browser-capabilities';
export { default as TextUtils } from 'utils/text-utils';
export { default as ViewportUtility } from 'utils/viewport';
export { default as PublicEventService } from 'plugins/public-event-service';
export { registry };
