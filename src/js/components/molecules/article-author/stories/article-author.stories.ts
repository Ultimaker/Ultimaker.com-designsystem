import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/article-author.data';
import knobsFormat from './article-author.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            image: { default: knobs.image },
            name: { default: knobs.name },
            publishedDate: { default: knobs.publishedDate },
        },
        template: require('./article-author.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/article-author',
    notes: addNotes(require('./article-author.md')),
});
