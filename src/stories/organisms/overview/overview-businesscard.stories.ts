import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './overview-businesscard.knobs.stories';

storiesOf('organisms|overview', module)
    .addDecorator(withKnobs)
    .add('Overview businesscard', () => ({
        props: {
            overview: {default: knobs().overview },
        },
        template: require('./overview-businesscard.stories.html'),
    }),
    {
        notes: { markdown: require('./overview-businesscard.stories.md') },
    });
