import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/hero-product.data';
import knobsFormat from './hero-product.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            data() {
                return {
                    slot: knobs.slot,
                };
            },
            props: {
                title: {
                    default: knobs.title,
                },
                subtitle: {
                    default: knobs.subtitle,
                },
                description: {
                    default: knobs.description,
                },
                image: {
                    default: knobs.image,
                },
                ctas: {
                    default: knobs.ctas,
                },
                products: {
                    default: knobs.products,
                },
                linkList: {
                    default: knobs.linkList,
                },
            },
            template: require('./hero-product.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms|hero/Hero product',
    notes: addNotes(require('./hero-product.md')),
});
