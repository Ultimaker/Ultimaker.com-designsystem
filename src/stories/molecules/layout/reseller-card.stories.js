import {storiesOf} from '@storybook/vue';
import data from './reseller-card.stories.json';
import {withKnobs, text, boolean} from '@storybook/addon-knobs';


storiesOf('Molecules|layout/cards', module)
    .addDecorator(withKnobs)
    .add(
        'Reseller card',
        () => {
            const name = text('Name', data.card.name),
                preferred = boolean('Preferred', data.card.preferred);

            return {
                data: () => ({
                    card: {
                        name,
                        preferred
                    }
                }),
                template: require('./reseller-card.stories.html')
            };
        }
    );
