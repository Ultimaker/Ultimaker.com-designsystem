import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './legacy-brands.knobs.stories.js';

storiesOf('organisms|legacy-brands', module)
    .addDecorator(withKnobs)
    .add('default', () => ({
        props: {
            brands: {default: knobs().brands}
        },
        template: require('./legacy-brands.stories.html')
    }),
    {
        notes: {markdown: require('./legacy-brands.stories.md')}
    });
