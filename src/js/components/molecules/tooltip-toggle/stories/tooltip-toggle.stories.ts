import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/tooltip-toggle.data';
import knobsFormat from './tooltip-toggle.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            label: { default: knobs.label },
            icon: { default: knobs.icon },
            description: { default: knobs.description },
        },
        template: require('./tooltip-toggle.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/tooltip-toggle',
    notes: addNotes(require('./tooltip-toggle.md')),
});
