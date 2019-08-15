/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/tabs.data';
import knobsFormat from './tabs.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            tabs: { default: knobs.tabs },
            sequenced: { default: knobs.sequenced },
            defaultTab: { default: knobs.defaultTab },
        },
        template: require('./tabs.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/tabs',
    notes: addNotes(require('./tabs.md')),
});
