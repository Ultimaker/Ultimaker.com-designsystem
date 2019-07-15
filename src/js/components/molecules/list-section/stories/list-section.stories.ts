/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/list-section.data';
import knobsFormat from './list-section.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            cards: { default: knobs.cards },
            limit: { default: knobs.limit },
            title: { default: knobs.title },
            tooltip: { default: knobs.tooltip },
        },
        template: require('./list-section.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/list-section',
    notes: addNotes(require('./list-section.md')),
});
