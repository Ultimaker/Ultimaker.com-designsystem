import { storiesOf } from '@storybook/vue';
import data from './tabs.stories.json';

storiesOf('Molecules|tabs', module)
    .add('Tabs', () => ({
        data: () => data,
        template: require('./tabs.stories.html'),
    }),
    {
        notes: { markdown: require('./tabs.stories.md') },
    });
