import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './examples.knobs.stories.js';

storiesOf('organisms|examples', module)
    .addDecorator(withKnobs)
    .add('Examples', () => ({
        props: {
            examples: {default: knobs().examples}
        },
        template: require('./examples.stories.html')
    }),
    {
        notes: {markdown: require('./examples.stories.md')}
    });
