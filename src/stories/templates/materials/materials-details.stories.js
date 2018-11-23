import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './materials-details.knobs.stories.js';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add('Materials-details', () => ({
        data: () => knobs(),
        template: require('./materials-details.stories.html')
    }),
    {
        notes: {markdown: require('./materials-details.stories.md')}
    });
