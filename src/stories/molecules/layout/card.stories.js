import {storiesOf} from '@storybook/vue';
import data from './card.stories.json';
import Card from 'src/js/components/molecules/card';

storiesOf('Molecules|layout', module)
    .add(
        'Card',
        () => {
            return {
                components: {
                    Card
                },
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
