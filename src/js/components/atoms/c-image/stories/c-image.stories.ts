import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/c-image.data';
import knobsFormat from './c-image.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            alt: { default: knobs.alt },
            focusArea: { default: knobs.focusArea },
            mimeType: { default: knobs.mimeType },
            quality: { default: knobs.quality },
            resizeBehavior: { default: knobs.resizeBehavior },
            url: { default: knobs.url },
        },
        template: require('./c-image.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms|media/c-image',
    notes: addNotes(require('./c-image.md')),
});
