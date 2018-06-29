import {storiesOf} from '@storybook/vue';
import data from './brand-card.stories.json';

storiesOf('Molecules|layout', module)
    .add(
        'Brand card',
        () => {
            return {
                data: () => ({
                    card: data.card
                }),
                template: require('./brand-card.stories.html')
            };
        },
        {
            notes: {markdown: require('./brand-card.stories.md')}
        }
    );
