import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/code.data';
import knobsFormat from './code.knobs-format';

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
        template: '<code>{{ text }}</code>',
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms|text/inline/code',
    notes: addNotes(require('../../inline.md')),
});
