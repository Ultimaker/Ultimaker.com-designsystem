import {select, text, object} from '@storybook/addon-knobs';
import data from './slider-reveal.stories.json';

export default () => ({
    slider: {
        modifier: select('Slider-reveal - Modifier', data.modifiers, data.modifiers.none),
        title: text('Slider-reveal - title', data.title),
        contents: object('Slider-reveal - contents', data.contents),
        imageSlider: object('Slider-reveal - images', data.imageSlider),
        link: object('Slider-reaveal - link', data.link)
    }
});
