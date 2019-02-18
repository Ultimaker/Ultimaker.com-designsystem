import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './page-header.knobs.stories';

storiesOf('organisms|page-header', module)
    .addDecorator(withKnobs)
    .add('Header', () => ({
        data: () => knobs(),
        template: require('./page-header.stories.html')
    }),
    {
        notes: {markdown: require('./page-header.stories.md')}
    });
