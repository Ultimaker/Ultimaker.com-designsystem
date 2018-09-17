import {files} from '@storybook/addon-knobs';

const responsiveImageKeys = ['mobileWidth', 'mobileLWidth', 'mobileXlWidth', 'tabletWidth', 'desktopWidth', 'desktopHdWidth'];

export const responsiveImage =  (name = '', image = {}, listKey = '') => Object.keys(image).reduce((acc, key) => {
    if (responsiveImageKeys.indexOf(key) > -1) {
        acc[key] = {
            ... image[key],
            url: files(`${name} - ${listKey} image ${key}`, ['image/png', 'image/jpg', 'image/svg+xml'], image[key].url)
        };

        if (acc[key] && acc[key].retinaUrl) {
            acc[key]['retinaUrl'] = files(
                `${name} - ${listKey} image ${key} retina`,
                ['image/png', 'image/jpg', 'image/svg+xml'],
                image[key].retinaUrl);
        }
    }

    return {...acc};
}, {...image});

export const responsiveImages = (name = '', listKeys = [], images = []) => images.map((image, i) => (
    responsiveImage(name, image, listKeys[i]))
);
