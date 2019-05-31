import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/tab-table-row.data';
import knobsFormat from './tab-table-row.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            label: { default: knobs.label },
            value: { default: knobs.value },
            tooltip: { default: knobs.tooltip },
            linkList: { default: knobs.linkList },
        },
        template: require('./tab-table-row.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/tab-table-row',
    notes: addNotes(require('./tab-table-row.md')),
});
