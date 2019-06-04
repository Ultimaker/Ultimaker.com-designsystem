import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/modal-button.data';
import knobsFormat from './modal-button.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            label: { default: knobs.label },
            modal: { default: knobs.modal },
            icon: { default: knobs.icon },
        },
        template: require('./modal-button.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/modal-button',
    notes: addNotes(require('./modal-button.md')),
});
