import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './explore.knobs.stories.js';

storiesOf('organisms|explore', module)
    .addDecorator(withKnobs)
    .add('Explore', () => ({
        props: {
            explore: {default: knobs().explore}
        },
        template: require('./explore.stories.html')
    }),
    {
        notes: {markdown: require('./explore.stories.md')}
    });
