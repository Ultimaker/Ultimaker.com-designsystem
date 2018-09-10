import {text, object} from '@storybook/addon-knobs';
import data from './examples.stories.json';

export default () => ({
    examples: {
        title: text('Examples - title', data.title),
        horizontalList: object('Examples horizontal list', data.horizontalList),
        cards: object('Expamles - cards', data.cards)
    }
});
