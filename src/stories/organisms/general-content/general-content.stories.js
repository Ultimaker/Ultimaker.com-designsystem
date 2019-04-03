import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './general-content.knobs.stories.js';

storiesOf('organisms|general-content', module)
    .addDecorator(withKnobs)
    .add('General content', () => ({
        props: {
            generalContent: {default: knobs().generalContent}
        },
        template: require('./general-content.stories.html')
    }),
    {
        notes: {markdown: require('./general-content.stories.md')}
    });
