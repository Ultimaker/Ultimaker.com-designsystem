import {storiesOf} from '@storybook/vue';
import data from './materials.stories.data';

storiesOf('templates|materials', module)
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
