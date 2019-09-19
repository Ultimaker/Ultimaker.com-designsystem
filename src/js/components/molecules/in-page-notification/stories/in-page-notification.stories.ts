/** @format */
import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/in-page-notification.data';
import knobsFormat from './in-page-notification.knobs-format';

const getStory = (type: string): Function => (): object => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            message: { default: knobs.message },
        },
        template: require('./in-page-notification.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/in-page-notification',
    notes: addNotes(require('./in-page-notification.md')),
});
