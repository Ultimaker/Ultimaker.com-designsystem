/* eslint camelcase: ["error", {properties: "never"}] */
import { text } from '@storybook/addon-knobs';
import data from './tag-list.stories.json';

export default () => ({
    tags: data.tags.map((tag, i) => ({
        title: text(`Tag - tag ${i}`, tag.title),
    })),
});
