import {storiesOf} from '@storybook/vue';
import data from './card.stories.json';

storiesOf('Molecules|layout/cards', module)
    .add(
        'Card',
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
