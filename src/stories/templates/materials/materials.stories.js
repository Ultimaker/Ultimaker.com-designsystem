import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import data from './materials.stories.data';
import knobs from './materials.knobs.stories.js';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add(
        'Materials',
        () => {
            return {
                data: () => ({
                    ... knobs()
                }),
                template: require('./materials.stories.html')
            };
        },
        {
            notes: {markdown: require('./materials.stories.md')}
        }
    );
