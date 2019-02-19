import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './page-footer.knobs.stories.js';

storiesOf('organisms|page-footer', module)
    .addDecorator(withKnobs)
    .add('Footer', () => ({
        data: () => knobs(),
        template: require('./page-footer.stories.html')
    }),
    {
        notes: {markdown: require('./page-footer.stories.md')}
    });
