/* eslint camelcase: ["error", {properties: "never"}] */
import {text, number, object} from '@storybook/addon-knobs';
import data from './colors.stories.json';

export default () => ({
    title: text('Colors - Main title', data.title),
    material: {
        title: text('Colors - title', data.material.title),
        short_title: text('Colors - short title', data.material.short_title),
        weight: {
            value: number('Colors - weight value', data.material.weight.value),
            unit: number('Colors - weight unit', data.material.weight.unit)
        },
        price: {
            value: number('Colors - price value', data.material.price.value),
            currency: text('Colors - price unit', data.material.price.currency)
        },
        _links: {
            self: {
                href: text('Colors - links href', data.material._links.self.href)
            }
        },
        image: {
            links: {
                self: {
                    href: text('Colors - image href', data.material.image.links.self.href)
                }
            }
        },
        material_colors: object('Colors - Material colors', data.material.material_colors)
    }
});
