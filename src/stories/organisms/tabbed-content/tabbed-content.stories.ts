import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import data from './tabbed-content.stories.json';

storiesOf('organisms|Tabbed Content', module)
    .addDecorator(withKnobs)
    .add('Tabbed Content', () => ({
        data: () => data,
        template: require('./tabbed-content.stories.html'),
    }));
