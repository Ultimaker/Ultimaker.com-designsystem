/* eslint camelcase: ["error", {properties: "never"}] */
import {text, object} from '@storybook/addon-knobs';
import data from './colors.stories.json';

export default () => ({
    title: text('Colors - Main title', data.title),
    material: {
        material_colors: object('Colors - Material colors', data.material.material_colors)
    }
});
