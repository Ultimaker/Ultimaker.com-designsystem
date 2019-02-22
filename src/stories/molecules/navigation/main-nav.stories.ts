import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './main-nav.knobs.stories';

storiesOf('Molecules|navigation', module)
    .addDecorator(withKnobs)
    .add('Main navigation', () => ({
        data: () => knobs(),
        template: require('./main-nav.stories.html'),
    }),
    {
        notes: {markdown: require('./main-nav.stories.md')}
    });
