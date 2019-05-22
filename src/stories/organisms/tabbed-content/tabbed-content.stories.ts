import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './tabbed-content.knobs.stories';

storiesOf('organisms|Tabbed Content', module)
    .addDecorator(withKnobs)
    .add('Tabbed Content', () => ({
        props: {
            TabbedContent: { default: knobs().TabbedContent },
        },
        template: require('./tabbed-content.stories.html'),
    }));
