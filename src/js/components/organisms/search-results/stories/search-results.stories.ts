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
            eventName: { default: knobs.eventName },
            isLoading: { default: knobs.isLoading },
            searchResults: { default: knobs.searchResults },
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
