import {text, object} from '@storybook/addon-knobs';
import data from './brands.stories.json';

export default () => ({
    brands: {
        title: text('Brands- title', data.title),
        brands: object('Brands - brands', data.brands),
        contentLink: object('Brands - content link', data.contentLink)
    }
});
