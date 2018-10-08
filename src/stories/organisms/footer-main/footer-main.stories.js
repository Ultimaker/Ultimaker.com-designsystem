import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './footer-main.knobs.stories.js';

storiesOf('organisms|footer-main', module)
    .addDecorator(withKnobs)
    .add('Footer', () => ({
        data: () => ({
            footer: knobs()
        }),
        template: require('./footer-main.stories.html')
    }),
    {
        notes: {markdown: require('./footer-main.stories.md')}
    });
