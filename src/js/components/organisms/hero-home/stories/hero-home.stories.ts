/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/hero-home.data';
import knobsFormat from './hero-home.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            title: { default: knobs.title },
            description: { default: knobs.description },
            image: { default: knobs.image },
        },
        template: require('./hero-home.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/hero-home',
    notes: addNotes(require('./hero-home.md')),
});
