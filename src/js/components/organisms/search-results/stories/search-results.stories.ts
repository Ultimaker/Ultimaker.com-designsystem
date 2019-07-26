/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/search-results.data';
import knobsFormat from './search-results.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            eventLoadMore: { default: knobs.eventLoadMore },
            eventSubmitSearch: { default: knobs.eventSubmitSearch },
            isLoading: { default: knobs.isLoading },
            label: { default: knobs.label },
            placeholder: { default: knobs.placeholder },
            searchResults: { default: knobs.searchResults },
            showLoadMore: { default: knobs.showLoadMore },
            terms: { default: knobs.terms },
        },
        template: require('./search-results.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/search-results',
    notes: addNotes(require('./search-results.md')),
});
