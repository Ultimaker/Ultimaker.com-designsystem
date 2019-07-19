/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/search-result.data';
import knobsFormat from './search-result.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {},
        template: require('./search-result.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/search-result',
    notes: addNotes(require('./search-result.md')),
});
