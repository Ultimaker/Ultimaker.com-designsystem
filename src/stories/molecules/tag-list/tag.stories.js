import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './tag.knobs.stories';

storiesOf('Molecules|tags/tag', module)
    .addDecorator(withKnobs)
    .add('tag', () => ({
        props: {
            tag: { default: knobs() },
        },
        template: require('./tag.stories.html'),
    }),
    {
        notes: { markdown: require('./tag.stories.md') },
    });
