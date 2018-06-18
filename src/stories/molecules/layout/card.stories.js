import {storiesOf} from '@storybook/vue';
import data from './card.stories.json';

storiesOf('Molecules|layout', module)
    .add(
        'card',
        () => {
            return {
                data: () => ({
                    card: data.card
                }),
                template: require('./card.stories.html')
            };
        },
        {
            notes: {markdown: require('./card.stories.md')}
        }
    );
