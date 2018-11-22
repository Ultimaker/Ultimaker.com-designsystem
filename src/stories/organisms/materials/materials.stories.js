import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './materials.knobs.stories.js';

storiesOf('organisms|materials/grid', module)
    .addDecorator(withKnobs)
    .add('Grid', () => ({
        data: () => knobs(),
        template: require('./materials.stories.html')
    }),
    {
        notes: {markdown: require('./materials.stories.md')}
    });