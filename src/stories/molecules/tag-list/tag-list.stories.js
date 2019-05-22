import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './tag-list.knobs.stories';

storiesOf('Molecules|tags/tag-list', module)
    .addDecorator(withKnobs)
    .add('tag-list', () => ({
        props: {
            tagList: { default: knobs() },
        },
        template: require('./tag-list.stories.html'),
    }),
    {
        notes: { markdown: require('./tag-list.stories.md') },
    });
