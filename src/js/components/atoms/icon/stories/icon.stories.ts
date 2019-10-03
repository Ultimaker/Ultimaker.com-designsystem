/** @format */
import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/icon.data';
import knobsFormat from './icon.knobs-format';

const getStory = (type: string): Function => (): object => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            iconName: { default: knobs.iconName },
        },
        template: require('./icon.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms/icon',
    notes: addNotes(require('./icon.md')),
});
