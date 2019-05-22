import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/product.data';
import knobsFormat from './product.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            icon: {
                default: knobs.icon,
            },
            name: {
                default: knobs.name,
            },
            pricing: {
                default: knobs.pricing,
            },
        },
        template: require('./product.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/product',
    notes: addNotes(require('./product.md')),
});
