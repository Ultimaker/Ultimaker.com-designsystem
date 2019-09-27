/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/search-bar.data';
import knobsFormat from './search-bar.knobs-format';

const getStory = (type): Function => (): {} => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            label: { default: knobs.label },
            languageCode: { default: knobs.languageCode },
            placeholder: { default: knobs.placeholder },
        },
        template: require('./search-bar.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/search-bar',
    notes: addNotes(require('./search-bar.md')),
});
