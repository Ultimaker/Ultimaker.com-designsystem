/* eslint camelcase: ["error", {properties: "never"}] */
import {text, object} from '@storybook/addon-knobs';
import data from './card.stories.json';

export default () => ({
    image: object('Card - Image', data.card.image),
    title: text('Card - Title', data.card.title),
    description: text('Card - Description', data.card.description),
    contentLink: object('Card - Link', data.card.contentLink),
    labels: data.card.labels.map((label, i) => text(`Card - Label ${i}`, label))
});
