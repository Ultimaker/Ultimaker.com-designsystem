/* eslint-disable */
import { text } from '@storybook/addon-knobs';
import data from './search-bar.stories.json';

export default () => ({
    searchBar: {
        label: text('Search Bar - label', data.searchBar.label),
        placeholder: text('Search Bar - placeholder', data.searchBar.placeholder)
    }
});
