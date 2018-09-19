/* eslint-disable */
import {text, select, files} from '@storybook/addon-knobs';
import data from './hero-product.stories.json';
import {iconList} from '../../helpers/icons';


export default () => ({
    heroProduct: {
        title: text('Hero - title', data.title),
        description: text('Hero - description', data.description),
        materials: data.materials.map((material, i) => ({
            short_title: text(`Hero - material ${i+1} short title`, material.short_title),
            iconName: select(`Hero - material icon`, iconList, material.iconName),
            weight: {
                value: text(`Hero - material ${i+1} weight value`, material.weight.value),
                unit: text(`Hero - material ${i+1} weight unit`, material.weight.unit)
            },
            price: {
                currency: text(`Hero - material ${i+1} price currency`, material.price.currency),
                value: text(`Hero - material ${i+1} price value`, material.price.value)
            }
        })),
        image: data.image.map((image) => ({
            ...image,
            links: {
                ...image.links,
                'square_mobile': [{
                    href: files('Hero - image mobile', ['image/png', 'image/jpg', 'image/svg+xml'], image.links.square_mobile[0].href)
                }],
                'square_desktop': [{
                    href: files('Hero - image desktop', ['image/png', 'image/jpg', 'image/svg+xml'], image.links.square_desktop[0].href)
                }]
            }
        })),
        link: data.links.map((link, i) => ({
            ...link,
            title: text(`Hero - link ${i+1} title`, link.title)
        })),
        documents: data.documents.map((document, i) => ({
            ...document,
            title: text(`Hero - document ${i+1} title`, document.title)
        })),
        labels: {
            buyCta: text('Hero - labels cta', data.labels.buyCta),
            excludingVat: text('Hero - labels ex. vat', data.labels.excludingVat),
            download: text('Hero - labels download', data.labels.download)
        }
    }
});
