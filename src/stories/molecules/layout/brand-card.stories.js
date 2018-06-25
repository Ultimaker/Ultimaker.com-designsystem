import {storiesOf} from '@storybook/vue';
import data from './brand-card.stories.json';
import BrandCard from 'molecules/brand-card';

storiesOf('Molecules|layout', module)
    .add(
        'Brand card',
        () => {
            return {
                components: {
                    BrandCard
                },
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
