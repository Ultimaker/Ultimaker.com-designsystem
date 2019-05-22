import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/em.data';
import knobsFormat from './em.knobs-format';

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
        template: '<p>Get out of bed <em>{{ text }}</em>!</p>',
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms|text/inline/em',
    notes: addNotes(require('../../inline.md')),
});
