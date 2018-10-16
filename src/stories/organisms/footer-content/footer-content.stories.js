import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './footer-content.knobs.stories.js';

storiesOf('organisms|footer-content', module)
    .addDecorator(withKnobs)
    .add('Footer', () => ({
        data: () => knobs(),
        template: require('./footer-content.stories.html')
    }),
    {
        notes: {markdown: require('./footer-content.stories.md')}
    });
