import {text, array} from '@storybook/addon-knobs';
import data from './examples.stories.json';
import {responsiveImage} from '../../helpers/images';

export default () => ({
    examples: {
        title: text('Examples - title', data.title),
        horizontalList: {
            label: text('Examples - list title', data.horizontalList.label),
            listItems: data.horizontalList.listItems.map((item, i) => ({
                text: text(`Examples - optimized ${i+1}`, item.text)
            }))
        },
        cards: data.cards.map((card, i) => ({
            title: text(`Examples - cards ${i+1} title`, card.title),
            description: text(`Examples - cards ${i+1} description`, card.description),
            contentLink: {
                text: text(`Examples - cards ${i+1} content link`, card.contentLink.text)
            },
            image: responsiveImage(`Examples - cards ${i+1}`, card.image)
        }))
    }
});
