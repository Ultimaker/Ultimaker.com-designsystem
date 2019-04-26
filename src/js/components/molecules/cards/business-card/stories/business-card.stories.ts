import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './business-card.knobs.stories';

storiesOf('Molecules|cards', module)
    .addDecorator(withKnobs)
    .add('Business Card', () => ({
        props: {
            businessCard: { default: knobs().businessCard },
        },
        template: require('./business-card.stories.html'),
    }),
    {
        notes: { markdown: require('./business-card.stories.md') },
    });
