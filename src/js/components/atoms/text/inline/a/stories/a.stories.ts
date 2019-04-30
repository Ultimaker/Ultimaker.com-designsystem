import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/a.data';
import knobsFormat from './a.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            props: {
                href: {
                    default: knobs.href,
                },
                text: {
                    default: knobs.text,
                },
            },
            template: '<a :href="href">{{ text }}</a>',
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms|text/inline/a',
    notes: addNotes(require('../../inline.md')),
});
