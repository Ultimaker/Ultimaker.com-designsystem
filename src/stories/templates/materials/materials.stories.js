import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import data from './materials.stories.data';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add(
        'Materials',
        () => {
            return {
                data: () => ({
                    ...data
                }),
                template: require('./materials.stories.html')
            };
        },
        {
            notes: {markdown: require('./materials.stories.md')}
        }
    );
