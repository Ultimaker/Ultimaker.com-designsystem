import 'babel-polyfill';
import 'whatwg-fetch';

import ComponentRegistry from 'utils/component-registry';
import Components from './components';
import '../scss/ultimaker.scss';

// import all icons from src/icons/.. as svg sprite
/* eslint-disable no-unused-vars */
const __svg__ = {
    path: '../assets/icons/**/*.svg',
    name: 'static/icons/iconset.svg'
};

const registry = new ComponentRegistry();

Object.keys(Components).forEach(c => {
    registry.registerComponent(Components[c]);
});

export {default as Defaults} from 'constants/defaults';
export {default as Arithmetic} from 'utils/arithmetic';
export {default as BrowserCapabilities} from 'utils/browser-capabilities';
// export {default as PolyLoader} from 'utils/poly-loader';
export {default as TextUtils} from 'utils/text-utils';
export {default as ViewportUtility} from 'utils/viewport';
export {registry};
