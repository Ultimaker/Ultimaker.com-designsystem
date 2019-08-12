/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/hero-basic.data';
import knobsFormat from './hero-basic.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            title: { default: knobs.title },
            subtitle: { default: knobs.subtitle },
            description: { default: knobs.description },
            image: { default: knobs.image },
            ctas: { default: knobs.ctas },
        },
        template: require('./hero-basic.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/hero-basic',
    notes: addNotes(require('./hero-basic.md')),
});
