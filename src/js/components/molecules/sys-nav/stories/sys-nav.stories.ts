/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/sys-nav.data';
import knobsFormat from './sys-nav.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            orderNowIcon: { default: knobs.orderNowIcon },
            orderNowLink: { default: knobs.orderNowLink },
            orderNowLabel: { default: knobs.orderNowLabel },
            searchIcon: { default: knobs.searchIcon },
            searchLabel: { default: knobs.searchLabel },
        },
        template: require('./sys-nav.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/sys-nav',
    notes: addNotes(require('./sys-nav.md')),
});
