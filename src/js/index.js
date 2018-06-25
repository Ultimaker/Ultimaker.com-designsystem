import 'babel-polyfill';
import 'components/generic/placeholder';
import '../scss/ultimaker.scss';
import './directives';
import './components/generic';

// import all icons from src/icons/.. as svg sprite
/* eslint-disable no-unused-vars */
const __svg__ = {
    path: '../assets/icons/**/*.svg',
    name: 'static/icons/iconset.svg'
};
