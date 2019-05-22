import { files, text } from '@storybook/addon-knobs';
import { responsiveImageKeys, allowedMimeTypes, imageKnobLabels } from '../constants';

export const contentfulImage = (name = '', image = {}) => ({
    ...image,
    url: text(name, image.url),
});

export const responsiveImage = (name = '', image = {}, listKey = '') => Object.keys(image).reduce((acc, key) => {
    if (responsiveImageKeys.indexOf(key) > -1) {
        acc[key] = {
            ...image[key],
            url: files(`${name} - ${listKey} image ${imageKnobLabels[key]}`, allowedMimeTypes, image[key].url),
        };

        if (acc[key] && acc[key].retinaUrl) {
            acc[key].retinaUrl = files(
                `${name}  - ${listKey} image ${imageKnobLabels[key]} retina`,
                allowedMimeTypes,
                image[key].retinaUrl,
            );
        }
        if (acc[key] && acc[key].retina && acc[key].retina.url) {
            acc[key].retina.url = files(
                `${name} - ${listKey} image ${imageKnobLabels[key]} retina`,
                allowedMimeTypes,
                image[key].retina.url,
            );
        }
    }

    return { ...acc };
}, { ...image });

export const responsiveImages = (name = '', listKeys = [], images = []) => images.map((image, i) => responsiveImage(`${name} ${i + 1}`, image, listKeys[i]));

export const deprecatedImages = (name = '', images = []) => (
    images.map(image => ({
        ...image,
        links: {
            ...image.links,
            landscape_desktop: [{
                href: files(`${name} small screen`, allowedMimeTypes, image.links.landscape_desktop[0].href),
            }],
            landscape_mobile: [{
                href: files(`${name} large screen`, allowedMimeTypes, image.links.landscape_mobile[0].href),
            }],
        },
    }))
);
