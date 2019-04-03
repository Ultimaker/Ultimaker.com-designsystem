import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './cases.knobs.stories.js';

storiesOf('organisms|cases', module)
    .addDecorator(withKnobs)
    .add('Cases', () => ({
        props: {
            cases: {default: knobs().cases}
        },
        template: require('./cases.stories.html')
    }),
    {
        notes: {markdown: require('./cases.stories.md')}
    });
