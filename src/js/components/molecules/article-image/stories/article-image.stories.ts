import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/article-image.data';
import knobsFormat from './article-image.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            image: { default: knobs.image },
            caption: { default: knobs.caption },
        },
        template: require('./article-image.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/article-image',
    notes: addNotes(require('./article-image.md')),
});
