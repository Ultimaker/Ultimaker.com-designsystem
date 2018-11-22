import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './materials-subnav.knobs.stories.js';

storiesOf('organisms|materials/materials-subnav', module)
    .addDecorator(withKnobs)
    .add('subnav', () => ({
        data: () => ({
            ...knobs()
        }),
        template: require('./materials-subnav.stories.html')
    }),
    {
        notes: {markdown: require('./materials-subnav.stories.md')}
    });
