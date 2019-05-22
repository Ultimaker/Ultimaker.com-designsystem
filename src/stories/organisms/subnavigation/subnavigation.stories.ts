import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './subnavigation.stories.knobs';
import data from './subnavigation.stories.data';

storiesOf('organisms|subnavigation', module)
    .addDecorator(withKnobs)
    .add('Subnavigation', () => ({
        props: {
            subnavigation: { default: knobs().subnavigation },
        },
        inject: ['data'],
        template: require('./subnavigation.stories.html'),
    }),
    { notes: require('./subnavigation.stories.md') });
