/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/tabbed-content.data';
import knobsFormat from './tabbed-content.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            title: { default: knobs.title },
            subtitle: { default: knobs.subtitle },
            sequenced: { default: knobs.sequenced },
            tabs: { default: knobs.tabs },
        },
        template: require('./tabbed-content.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/tabbed-content',
    notes: addNotes(require('./tabbed-content.md')),
});
