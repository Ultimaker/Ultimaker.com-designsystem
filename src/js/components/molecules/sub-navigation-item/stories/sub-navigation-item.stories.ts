/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/sub-navigation-item.data';
import knobsFormat from './sub-navigation-item.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            url: { default: knobs.url },
            image: { default: knobs.image },
            label: { default: knobs.label },
        },
        template: require('./sub-navigation-item.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/sub-navigation-item',
    notes: addNotes(require('./sub-navigation-item.md')),
});
