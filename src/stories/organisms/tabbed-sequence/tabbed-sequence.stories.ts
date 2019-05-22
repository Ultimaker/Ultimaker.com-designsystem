import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './tabbed-sequence.knobs.stories';

storiesOf('organisms|Tabbed Sequence', module)
    .addDecorator(withKnobs)
    .add('Tabbed Sequence', () => ({
        props: {
            TabbedSequence: { default: knobs().TabbedSequence },
        },
        template: require('./tabbed-sequence.stories.html'),
    }));
