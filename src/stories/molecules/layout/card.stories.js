import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './card.knobs.stories.js';

storiesOf('Molecules|layout/cards', module)
    .addDecorator(withKnobs)
    .add(
        'Card',
        () => {
            return {
                data: () => ({
                    card: knobs()
                }),
                template: require('./card.stories.html')
            };
        },
        {
            notes: {markdown: require('./card.stories.md')}
        }
    );
