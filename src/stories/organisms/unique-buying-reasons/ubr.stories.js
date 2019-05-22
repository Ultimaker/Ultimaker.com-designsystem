import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './ubr.knobs.stories';

storiesOf('organisms|unique-buying-reasons', module)
    .addDecorator(withKnobs)
    .add('Unique buying reasons', () => ({
        props: {
            ubr: { default: knobs().ubr },
        },
        template: require('./ubr.stories.html'),
    }),
    {
        notes: { markdown: require('./ubr.stories.md') },
    });
