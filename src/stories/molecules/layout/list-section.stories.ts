import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './list-section.knobs.stories';

storiesOf('Molecules|layout/lists', module)
    .addDecorator(withKnobs)
    .add('List section', () => ({
        props: {
            listSection: { default: knobs().listSection },
        },
        template: require('./list-section.stories.html'),
    }),
    {
        notes: { markdown: require('./list-section.stories.md') },
    });
