/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/filter-category.data';
import knobsFormat from './filter-category.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            activeFilters: { default: knobs.activeFilters },
            labels: { default: knobs.labels },
            showAllLabel: { default: knobs.showAllLabel },
            title: { default: knobs.title },
        },
        template: require('./filter-category.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/filter-category',
    notes: addNotes(require('./filter-category.md')),
});
