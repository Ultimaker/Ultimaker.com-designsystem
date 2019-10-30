/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/combo-box.data';
import knobsFormat from './combo-box.knobs-format';

const getStory = (type: string): object => (): object => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            datasource: { default: knobs.datasource },
            label: { default: knobs.label },
            placeholder: { default: knobs.placeholder },
            selected: { default: knobs.selected },
        },
        template: require('./combo-box.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/combo-box',
    notes: addNotes(require('./combo-box.md')),
});
