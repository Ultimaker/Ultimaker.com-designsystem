import {files} from '@storybook/addon-knobs';

const responsiveImageKeys = ['mobileWidth', 'mobileLWidth', 'mobileXlWidth', 'tabletWidth', 'desktopWidth', 'desktopHdWidth'];
const allowedMimeTypes = ['image/png', 'image/jpg', 'image/svg+xml'];

export const responsiveImage =  (name = '', image = {}, listKey = '') => Object.keys(image).reduce((acc, key) => {
    if (responsiveImageKeys.indexOf(key) > -1) {
        acc[key] = {
            ... image[key],
            url: files(`${name} - ${listKey} image ${key}`, allowedMimeTypes, image[key].url)
        };

        if (acc[key] && acc[key].retinaUrl) {
            acc[key]['retinaUrl'] = files(
                `${name} - ${listKey} image ${key} retina`,
                allowedMimeTypes,
                image[key].retinaUrl);
        }
    }

    return {...acc};
}, {...image});

export const responsiveImages = (name = '', listKeys = [], images = []) => images.map((image, i) => (
    responsiveImage(name, image, listKeys[i]))
);

export const deprecatedImages = (name = '', images = []) => (
    images.map((image) => ({
        ...image,
        links: {
            ...image.links,
            'landscape_desktop': [{
                href: files(`${name} mobile`, allowedMimeTypes, image.links.landscape_desktop[0].href)
            }],
            'landscape_mobile': [{
                href: files(`${name} desktop`, allowedMimeTypes, image.links.landscape_mobile[0].href)
            }]
        }
    }))
);
