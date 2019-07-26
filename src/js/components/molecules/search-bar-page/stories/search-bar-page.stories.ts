/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/search-bar-page.data';
import knobsFormat from './search-bar-page.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            eventSubmitSearch: { default: knobs.eventSubmitSearch },
            isLoading: { default: knobs.isLoading },
            label: { default: knobs.label },
            placeholder: { default: knobs.placeholder },
        },
        template: require('./search-bar-page.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/search-bar-page',
    notes: addNotes(require('./search-bar-page.md')),
});
