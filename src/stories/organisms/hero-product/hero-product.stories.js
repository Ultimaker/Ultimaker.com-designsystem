import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import data from './hero-product.stories.json';

storiesOf('organisms|hero', module)
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
            inject: ['data'],
            template: require('./hero-product.stories.html')
        };
    },
    {
        notes: {markdown: require('./hero-product.stories.md')}
    });
