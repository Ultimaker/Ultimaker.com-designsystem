import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/wizard-step-confirmation.data';
import knobsFormat from './wizard-step-confirmation.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            props: {
            },
            template: require('./wizard-step-confirmation.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/wizard-step-confirmation',
    notes: addNotes(require('./wizard-step-confirmation.md')),
});
