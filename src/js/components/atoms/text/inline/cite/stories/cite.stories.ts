import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/cite.data';
import knobsFormat from './cite.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            text: {
                default: knobs.text,
            },
        },
        template: '<cite>{{ text }}</cite>',
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms|text/inline/cite',
    notes: addNotes(require('../../inline.md')),
});
