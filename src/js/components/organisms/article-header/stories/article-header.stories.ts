import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/article-header.data';
import knobsFormat from './article-header.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            author: { default: knobs.author },
            publishedDate: { default: knobs.publishedDate },
        },
        template: require('./article-header.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/article-header',
    notes: addNotes(require('./article-header.md')),
});
