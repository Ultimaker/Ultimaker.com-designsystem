import { select, text, object } from '@storybook/addon-knobs';
import data from './slider-reveal.stories.json';
import { iconList } from '../../helpers/icons';
import { responsiveImages } from '../../helpers/images';

export default () => ({
    slider: {
        modifier: select('Slider-reveal - Modifier', data.modifiers, data.modifiers.none),
        title: text('Slider-reveal - title', data.title),
        contents: object('Slider-reveal - contents', data.contents),
        link: {
            ...data.link,
            icon: select('Slider-reveal - link icon', iconList, data.link.icon),
            text: text('Slider-reveal - link text', data.link.text),
        },
        imageSlider: {
            images: responsiveImages('Slider-reveal', ['foreground', 'background'], data.imageSlider.images),
        },
    },
});
