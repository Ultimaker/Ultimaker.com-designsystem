import {storiesOf} from '@storybook/vue';
import data from './reseller-card.stories.json';
import {withKnobs, text, object, boolean} from '@storybook/addon-knobs';


storiesOf('Molecules|layout/cards', module)
    .addDecorator(withKnobs)
    .add(
        'Reseller card',
        () => {
            const name = text('Name', data.card.name),
                image = object('Image', data.card.image);

            return {
                data: () => ({
                    card: {
                        name,
                        image,
                        showroomCount: data.card.showroomCount,
                        href: '/reseller',
                        labels: data.card.labels
                    }
                }),
                template: require('./reseller-card.stories.html')
            };
        }
    );
