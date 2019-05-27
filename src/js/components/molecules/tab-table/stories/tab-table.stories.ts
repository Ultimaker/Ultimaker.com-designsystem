import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/tab-table.data';
import knobsFormat from './tab-table.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            props: {
                label: { default: knobs.label },
                rows: { default: knobs.row },
            },
            template: require('./tab-table.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/tab-table',
    notes: addNotes(require('./tab-table.md')),
});
