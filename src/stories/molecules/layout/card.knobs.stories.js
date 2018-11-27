/* eslint camelcase: ["error", {properties: "never"}] */
import {text, object} from '@storybook/addon-knobs';
import data from './card.stories.json';

export default () => ({
    card: {
        image: object('Card - Image', data.card.image),
        title: text('Card - Title', data.card.title),
        description: text('Card - Description', data.card.description),
        contentLink: {
            text: text('Card - link text', data.card.contentLink.text),
            href: text('Card - link href', data.card.contentLink.href)
        },
        tags: data.card.tags.map((tag, i) => text(`Card - tag ${i}`, tag))
    }
});
