/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/tab.data';
import knobsFormat from './tab.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            id: { default: knobs.id },
            label: { default: knobs.label },
            content: { default: knobs.content },
            active: { default: knobs.active },
        },
        template: require('./tab.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/tab',
    notes: addNotes(require('./tab.md')),
});
