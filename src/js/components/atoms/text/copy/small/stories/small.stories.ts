import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/small.data';
import knobsFormat from './small.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            className: {
                default: knobs.className,
            },
            text: {
                default: knobs.text,
            },
        },
        template: '<small :class="className">{{ text }}</small>',
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms|text/copy/small',
    notes: addNotes(require('../../copy.md')),
});
