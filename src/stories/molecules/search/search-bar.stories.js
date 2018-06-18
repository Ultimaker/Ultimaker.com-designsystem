import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';

storiesOf('Molecules|search', module)
    .add(
        'Searchbar',
        () => ({
            data: () => ({
                openState: true
            }),
            methods: {
                close() {
                    action('close');
                }
            },
            template: require('./search-bar.stories.html')
        }),
        {
            notes: {markdown: require('./search-bar.stories.md')}
        }
    );
