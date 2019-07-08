/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/social-sharing.data';
import knobsFormat from './social-sharing.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            items: {
                default: knobs.items,
            },
        },
        template: require('./social-sharing.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/social-sharing',
    notes: addNotes(require('./social-sharing.md')),
});
