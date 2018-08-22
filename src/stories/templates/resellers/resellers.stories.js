import {storiesOf} from '@storybook/vue';
import data from './resellers.stories.data';

storiesOf('templates|resellers', module)
    .add(
        'Resellers',
        () => {
            return {
                data: () => ({
                    ...data
                }),
                template: require('./resellers.stories.html')
            };
        },
        {
            notes: {markdown: require('./resellers.stories.md')}
        }
    );
