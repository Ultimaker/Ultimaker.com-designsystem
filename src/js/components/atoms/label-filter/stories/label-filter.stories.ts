/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/label-filter.data';
import knobsFormat from './label-filter.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            category: { default: knobs.label },
            checked: { default: knobs.checked },
            disabled: { default: knobs.disabled },
            label: { default: knobs.label },
            name: { default: knobs.name },
            value: { default: knobs.value },
        },
        template: require('./label-filter.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms/label-filter',
    notes: addNotes(require('./label-filter.md')),
});
