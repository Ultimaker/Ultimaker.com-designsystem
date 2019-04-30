import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/cta-block.data';
import knobsFormat from './cta-block.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            props: {
                ctas: { default: knobs.ctas },
                mod: { default: knobs.mod },
                styleContentButton: { default: knobs.styleContentButton },
                styleContentLink: { default: knobs.styleContentLink },
                modContentLink: { default: knobs.modContentLink },
                modContentButton: { default: knobs.modContentButton },
            },
            template: require('./cta-block.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/cta-block',
    notes: addNotes(require('./cta-block.md')),
});
