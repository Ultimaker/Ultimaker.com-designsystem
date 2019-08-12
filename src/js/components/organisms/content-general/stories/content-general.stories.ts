/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/content-general.data';
import knobsFormat from './content-general.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            title: { default: knobs.title },
            description: { default: knobs.description },
            reversed: { default: knobs.reversed },
            cta: { default: knobs.cta },
            image: { default: knobs.image },
        },
        template: require('./content-general.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/content-general',
    notes: addNotes(require('./content-general.md')),
    knobs: { escapeHTML: false },
});
