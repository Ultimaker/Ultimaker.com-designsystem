import { text, files } from '@storybook/addon-knobs';
import data from './business-card.stories.json';

export default () => ({
    businessCard: {
        ... data,
        title: text('Business-Card title', data.businessCard.title),
        properties: data.businessCard.properties.map(({label, value}, index) => ({
            label: text(`Business-Card property ${index+1} - label`, label),
            value: text(`Business-Card property ${index+1} - value`, value)
        })),
        contentLink: {
            ... data.businessCard.contentLink,
            label: text('Business-Card-contentLink label', data.businessCard.contentLink.label),
            url: text('Business-Card-contentLink url', data.businessCard.contentLink.url)
        },
        image: {
            ... data.businessCard.image,
            desktopUrl: files('Business-Card image', ['image/png', 'image/svg+xml'], '/generator/svg/120/120'),
            mobileUrl: files('Business-Card image', ['image/png', 'image/svg+xml'], '/generator/svg/120/120'),
            originalUrl: files('Business-Card image', ['image/png', 'image/svg+xml'], '/generator/svg/120/120')
        },
    },
});
