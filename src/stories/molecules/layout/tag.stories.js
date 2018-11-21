import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './tag.knobs.stories.js';

storiesOf('Molecules|tags/tag', module)
    .addDecorator(withKnobs)
    .add('tag', () => {
        return {
            data: () => ({
                tag: knobs()
            }),
            template: require('./tag.stories.html')
        };
    },
    {
        notes: {markdown: require('./tag.stories.md')}
    });
