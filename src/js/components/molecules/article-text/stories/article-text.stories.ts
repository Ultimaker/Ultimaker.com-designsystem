import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/article-text.data';
import knobsFormat from './article-text.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            text: { default: knobs.text },
        },
        template: require('./article-text.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/article-text',
    notes: addNotes(require('./article-text.md')),
    knobs: { escapeHTML: false },
});
