import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/strong.data';
import knobsFormat from './strong.knobs-format';

const getStory = (type) => {
    return () => {
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
            template: '<p>... the most important rule, the rule you can never forget, no matter how much he cries, no matter how much he begs: <strong>{{ text }}</strong>.</p>',
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms|text/inline/strong',
    notes: addNotes(require('../../inline.md')),
});
