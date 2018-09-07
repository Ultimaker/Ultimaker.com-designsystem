import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './colors.knobs.stories.js';

storiesOf('organisms|colors', module)
    .addDecorator(withKnobs)
    .add('Colors', () => {
        return {
            data: () => ({
                colors: knobs()
            }),
            template: require('./colors.stories.html')
        };
    },
    {
        notes: {markdown: require('./colors.stories.md')}
    });
