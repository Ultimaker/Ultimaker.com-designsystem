import {text, object} from '@storybook/addon-knobs';
import data from './examples.stories.json';

export default () => ({
    title: text('Examples - title', data.title),
    horizontalList: object('Examples - horizontal List', data.horizontalList),
    cards: object('Examples - cards', data.cards)
});
