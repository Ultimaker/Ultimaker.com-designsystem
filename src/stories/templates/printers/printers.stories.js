import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import data from './printers.stories.data';

storiesOf('templates|printers', module)
    .addDecorator(withKnobs)
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
