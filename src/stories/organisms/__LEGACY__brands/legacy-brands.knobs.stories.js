import {text, files} from '@storybook/addon-knobs';
import data from './legacy-brands.stories.json';

const createBrandsImages = () => (
    data.brands.map(({image, body}, i) => ({
        image: {
            ... image,
            mobileWidth: {
                url: files(`${i+1}. Brands - image`, ['image/png', 'image/jpg', 'image/svg+xml'], image.mobileWidth.url)
            }
        },
        body: text(`${i+1}. Brands - text`, body)
    }))
);

export default () => ({
    brands: {
        title: text('Brands- title', data.title),
        brands: createBrandsImages(),
        contentLink: {
            ... data.contentLink,
            text: text('Brands - content link text', data.contentLink.text)
        }
    }
});
