import {text} from '@storybook/addon-knobs';
import data from './explore.stories.json';
import {responsiveImage} from '../../helpers/images';

export default () => ({
    explore: {
        title: text('Explore - title', data.title),
        items: data.items.map((item, i) => ({
            title: text(`Explore - item ${i+1} title`, item.title),
            description: text(`Explore - items ${i+1} description`, item.description),
            image: responsiveImage(`Explore - items ${i+1} image`, item.image)
        }))
    }
});
