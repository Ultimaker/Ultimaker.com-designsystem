import {text, number, object} from '@storybook/addon-knobs';
import data from './hero-product.stories.json';

export default () => ({
    title: text('Hero - title', data.title),
    description: text('Hero - description', data.description),
    materials: object('Hero - pricing', data.materials),
    image: object('Hero - image ', data.image),
    link: object('Hero - links', data.links),
    documents: object('Hero - Documents', data.documents),
    labels: object('Materials', data.labels)
});
