import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import data from './auto-complete.stories.json';

storiesOf('Molecules|forms', module)
    .add(
        'Auto complete',
        () => {
            return {
                data: () => ({
                    defaultOpen: data.defaultOpen,
                    storedItems: data.storedItems,
                    storedLabel: data.storedLabel,
                    datasource: data.datasource
                }),
                methods: {
                    input: action('input'),
                    close: action('close'),
                    changeFocus: action('changeFocus')
                },
                template: require('./auto-complete.stories.html')
            };
        },
        {
            notes: {markdown: require('./auto-complete.stories.md')}
        }
    );
