import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './brands.knobs.stories.js';

storiesOf('organisms|brands', module)
    .addDecorator(withKnobs)
    .add('Brands', () => ({
        props: {
            brands: {default: knobs().brands}
        },
        template: require('./brands.stories.html')
    }),
    {
        notes: {markdown: require('./brands.stories.md')}
    });
