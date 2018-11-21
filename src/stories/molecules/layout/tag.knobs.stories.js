/* eslint camelcase: ["error", {properties: "never"}] */
import {text} from '@storybook/addon-knobs';

export default () => ({
    tag: text('Tag', 'One tag')
});
