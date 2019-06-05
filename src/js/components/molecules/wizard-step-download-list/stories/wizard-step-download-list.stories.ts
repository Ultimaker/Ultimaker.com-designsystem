import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/wizard-step-download-list.data';
import knobsFormat from './wizard-step-download-list.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            title: { default: knobs.title },
            subtitle: { default: knobs.subtitle },
            description: { default: knobs.description },
            items: { default: knobs.items },
            submitButton: { default: knobs.submitButton },
        },
        template: require('./wizard-step-download-list.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/wizard-step-download-list',
    notes: addNotes(require('./wizard-step-download-list.md')),
});
