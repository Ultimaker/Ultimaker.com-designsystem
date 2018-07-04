import Defaults from 'constants/defaults';
import '../scss/ultimaker.scss';

// import all icons from src/icons/.. as svg sprite
/* eslint-disable no-unused-vars */
const __svg__ = {
    path: '../assets/icons/**/*.svg',
    name: 'static/icons/iconset.svg'
};

const components = require.context('./components', true, /\/index\.js$/);

components.keys().forEach(c => components(c));

export {Defaults};
export * from 'utils/arithmetic';
export * from 'utils/browser-capabilities';
// export * from 'utils/poly-loader';
export * from 'utils/text-utils';
export * from 'utils/viewport';
