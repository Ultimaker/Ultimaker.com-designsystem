import {storiesOf} from '@storybook/vue';
import data from './printers.stories.data';

storiesOf('templates|printers', module)
    .add(
        'Printers',
        () => {
            return {
                data: () => ({
                    ...data
                }),
                template: require('./printers.stories.html')
            };
        },
        {
            notes: {markdown: require('./printers.stories.md')}
        }
    );
