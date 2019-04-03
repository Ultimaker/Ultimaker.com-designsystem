import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import knobs from './search-bar.knobs.stories';

storiesOf('Molecules|search', module)
    .addDecorator(withKnobs)
    .add('Searchbar', () => ({
        props: {
            searchBar: { default: knobs().searchBar }
        },
        methods: {
            close: action('close'),
        },
        template: require('./search-bar.stories.html'),
    }),
    {
        notes: { markdown: require('./search-bar.stories.md') },
    });
