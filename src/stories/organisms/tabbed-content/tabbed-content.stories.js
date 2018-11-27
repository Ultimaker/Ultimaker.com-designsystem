import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './tabbed-content.knobs.stories.js';

storiesOf('organisms|tabbed-content', module)
    .addDecorator(withKnobs)
    .add('Tabbed content', () => ({
        data: () => knobs(),
        template: require('./tabbed-content.stories.html')
    }),
    {
        notes: {markdown: require('./tabbed-content.stories.md')}
    });
