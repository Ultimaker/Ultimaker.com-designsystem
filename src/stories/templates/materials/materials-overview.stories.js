import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './materials-overview.knobs.stories.js';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add('Materials-overview', () => ({
        data: () => knobs(),
        template: require('./materials-overview.stories.html')
    }),
    {
        notes: {markdown: require('./materials-overview.stories.md')}
    });
