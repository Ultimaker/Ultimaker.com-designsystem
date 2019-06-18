import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/article-content.data';
import knobsFormat from './article-content.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            molecules: { default: knobs.molecules },
        },
        template: require('./article-content.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/article',
    notes: addNotes(require('./article-content.md')),
    knobs: { escapeHTML: false },
});
