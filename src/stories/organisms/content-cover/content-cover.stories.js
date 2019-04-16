import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './content-cover.knobs.stories.js';

storiesOf('organisms|content', module)
    .addDecorator(withKnobs)
    .add('content cover', () => ({
        props: {
            contentCover: {default: knobs().contentCover}
        },
        template: require('./content-cover.stories.html')
    }),
    {
        notes: require('./content-cover.stories.md')
    });
