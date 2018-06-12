import 'babel-polyfill';
import '../scss/ultimaker.scss';
import './directives';
import './components';

// import all icons from src/icons/.. as svg sprite
/* eslint-disable no-unused-vars */
const __svg__ = {
    path: '../assets/icons/**/*.svg',
    name: 'static/icons/iconset.svg'
};
