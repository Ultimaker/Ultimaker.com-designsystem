import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import SearchBar from 'molecules/search';

storiesOf('Molecules|search', module)
    .add(
        'Searchbar',
        () => ({
            components: {
                SearchBar
            },
            data: () => ({
                openState: true
            }),
            methods: {
                close: action('close')
            },
            template: require('./search-bar.stories.html')
        }),
        {
            notes: {markdown: require('./search-bar.stories.md')}
        }
    );
