import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/hero-article.data';
import knobsFormat from './hero-article.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            title: { default: knobs.title },
            subtitle: { default: knobs.subtitle },
            image: { default: knobs.image },
        },
        template: require('./hero-article.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/hero-article',
    notes: addNotes(require('./hero-article.md')),
});
