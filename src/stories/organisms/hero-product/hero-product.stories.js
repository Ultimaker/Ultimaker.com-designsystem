import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import data from './hero-product.stories.json';

storiesOf('organisms|hero-product', module)
    .addDecorator(withKnobs)
    .add('Hero product', () => {
        const title = text('Title', data.title),
            description = text('Link', data.description),
            materials = object('Materials', data.materials),
            image = object('Materials', data.image),
            link = object('Links', data.links),
            documents = object('Documents', data.documents),
            labels = object('Materials', data.labels);

        return {
            data: () => ({
                heroProduct: {
                    title,
                    description,
                    materials,
                    image,
                    link,
                    documents,
                    labels
                }
            }),
            template: `<hero-product v-bind="heroProduct"></hero-product>`
        };
    });
