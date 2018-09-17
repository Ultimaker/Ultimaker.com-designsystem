/* eslint camelcase: ["error", {properties: "never"}] */
import {text, files} from '@storybook/addon-knobs';
import data from './colors.stories.json';
import {deprecatedImages} from '../../helpers/images';

export default () => ({
    colors: {
        title: text('Colors - Main title', data.title),
        material: {
            ... data.material,
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
