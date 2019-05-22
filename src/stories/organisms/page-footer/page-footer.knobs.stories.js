import data from './page-footer.stories.json';

export default () => ({
    ...data,
    updateCountry: () => console.info('I changed'),
    country: {
        name: 'Netherlands',
        code: 'NL',
    },
});
