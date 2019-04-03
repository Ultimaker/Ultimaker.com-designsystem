import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './ecosystem.knobs.stories.js';

storiesOf('organisms|ecosystem', module)
    .addDecorator(withKnobs)
    .add('Ecosystem', () => ({
        props: {
            ecosystem: {default: knobs().ecosystem}
        },
        template: require('./ecosystem.stories.html')
    }),
    {
        notes: {markdown: require('./ecosystem.stories.md')}
    });
