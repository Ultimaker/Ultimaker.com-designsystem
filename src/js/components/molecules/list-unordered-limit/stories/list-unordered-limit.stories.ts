import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/list-unordered-limit.data';
import knobsFormat from './list-unordered-limit.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            props: {
            },
            template: require('./list-unordered-limit.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/list-unordered-limit',
    notes: addNotes(require('./list-unordered-limit.md')),
});
