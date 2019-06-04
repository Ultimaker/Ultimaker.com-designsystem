import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/modal-wizard.data';
import knobsFormat from './modal-wizard.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            title: { default: knobs.title },
            steps: { default: knobs.steps },
        },
        template: require('./modal-wizard.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/modal-wizard',
    notes: addNotes(require('./modal-wizard.md')),
});
