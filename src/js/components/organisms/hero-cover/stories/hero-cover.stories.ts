/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/hero-cover.data';
import knobsFormat from './hero-cover.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            title: { default: knobs.title },
            description: { default: knobs.description },
            image: { default: knobs.image },
            ctas: { default: knobs.ctas },
        },
        template: require('./hero-cover.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/hero-cover',
    notes: addNotes(require('./hero-cover.md')),
});
