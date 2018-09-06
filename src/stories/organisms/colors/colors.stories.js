import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import data from './colors.stories.json';
import knobs from './colors.knobs.stories.js';

storiesOf('organisms|colors', module)
    .addDecorator(withKnobs)
    .add('Colors', () => {
        return {
            data: () => ({
                colors: knobs()
            }),
            inject: ['data'],
            template: require('./colors.stories.html')
        };
    },
    {
        notes: {markdown: require('./colors.stories.md')}
    });
