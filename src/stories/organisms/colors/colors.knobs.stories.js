/* eslint camelcase: ["error", {properties: "never"}] */
import {text} from '@storybook/addon-knobs';
import data from './colors.stories.json';
import {deprecatedImages} from '../../helpers/images';

export default () => ({
    colors: {
        title: text('Colors - Main title', data.title),
        labels: {
            whereToBuy: text('Colors - label where to buy:', data.labels.whereToBuy)
        },
        material: {
            ... data.material,
            title: text('Colors - material title', data.material.title),
            short_title: text('Colors - material title', data.material.short_title),
            weight: {
                ...data.material.weight,
                unit: text('Colors - material weight unit', data.material.weight.unit),
                value: text('Colors - material weight', data.material.weight.value)
            },
            material_colors: data.material.material_colors.map((color, i) => ({
                ...color,
                title: text(`Colors - material ${i+1} color title`, color.title),
                rgb_hex_code: text(`Colors - material ${i+1} color HEX`, color.rgb_hex_code),
                system_code: text(`Colors - material ${i+1} color RAL`, color.system_code),
                image: deprecatedImages(`Colors - material ${i+1} image`, color.image)
            }))
        }
    }
});
