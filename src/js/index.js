import '../scss/ultimaker.scss';
import AnimatedArrow from 'atoms/animated-arrow';
import Icon from 'atoms/icon';
import IconButton from 'molecules/icon-button';


// import all icons from src/icons/.. as svg sprite
/* eslint-disable no-unused-vars */
const __svg__ = {
    path: '../assets/icons/**/*.svg',
    name: 'static/icons/iconset.svg'
};

export default {
    AnimatedArrow,
    IconButton,
    Icon
};
