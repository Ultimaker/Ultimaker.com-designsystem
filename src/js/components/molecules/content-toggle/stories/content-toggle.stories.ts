/** @format */
import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/content-toggle.data';
import knobsFormat from './content-toggle.knobs-format';

const getStory = (type: string): Function => (): object => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            collapsedIcon: { default: knobs.collapsedIcon },
            collapsedText: { default: knobs.collapsedText },
            expandedIcon: { default: knobs.expandedIcon },
            expandedText: { default: knobs.expandedText },
            initiallyExpanded: { default: knobs.initiallyExpanded },
            preventDefault: { default: knobs.preventDefault },
        },
        template: require('./content-toggle.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules|content-toggle',
    notes: addNotes(require('./content-toggle.md')),
});
