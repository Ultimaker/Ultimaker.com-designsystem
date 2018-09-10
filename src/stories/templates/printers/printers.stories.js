import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './printers.knobs.stories.js';

storiesOf('templates|printers', module)
    .addDecorator(withKnobs)
    .add('Printers', () => {
        return {
            data: () => knobs(),
            template: require('./printers.stories.html')
        };
    },
    {
        notes: {markdown: require('./printers.stories.md')}
    });
