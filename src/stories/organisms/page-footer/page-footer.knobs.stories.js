import data from './page-footer.stories.json';

export default () => ({
    ... data,
    updateCountry: () => alert('I changed'),
    country: {
        name: 'Netherlands',
        code: 'NL'
    }
});
