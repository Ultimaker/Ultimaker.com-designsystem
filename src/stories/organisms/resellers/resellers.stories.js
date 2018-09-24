import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './resellers.knobs.stories.js';

storiesOf('organisms|resellers', module)
    .addDecorator(withKnobs)
    .add('Resellers', () => ({
        data: () => knobs(),
        template: require('./resellers.stories.html')
    }),
    {
        notes: {markdown: require('./resellers.stories.md')}
    });
