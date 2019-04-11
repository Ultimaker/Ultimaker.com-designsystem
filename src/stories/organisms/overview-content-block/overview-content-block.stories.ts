import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './overview-content-block.knobs.stories';

storiesOf('organisms|overview', module)
    .addDecorator(withKnobs)
    .add('Overview content-block', () => ({
        props: {
            overview: { default: knobs().overview },
        },
        template: require('./overview-content-block.stories.html'),
    }),
    {
        notes: { markdown: require('./overview-content-block.stories.md') },
    });
