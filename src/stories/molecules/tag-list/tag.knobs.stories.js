/* eslint camelcase: ["error", {properties: "never"}] */
import { text } from '@storybook/addon-knobs';
import data from './tag.stories.json';

export default () => ({
    tag: {
        title: text('Tag', data.title),
    },
});
