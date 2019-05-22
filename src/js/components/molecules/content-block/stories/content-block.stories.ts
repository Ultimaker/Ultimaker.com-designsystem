import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/content-block.data';
import knobsFormat from './content-block.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            title: { default: knobs.title },
            description: { default: knobs.description },
            image: { default: knobs.image },
            cta: { default: knobs.cta },
        },
        template: require('./content-block.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/content-block',
    notes: addNotes(require('./content-block.md')),
});
