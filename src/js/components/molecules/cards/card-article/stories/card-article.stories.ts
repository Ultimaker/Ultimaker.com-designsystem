/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/card-article.data';
import { knobsFormat } from './card-article.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            clickEvent: { default: knobs.clickEvent },
            description: { default: knobs.description },
            image: { default: knobs.image },
            labels: { default: knobs.labels },
            title: { default: knobs.title },
            url: { default: knobs.url },
        },
        template: require('./card-article.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/cards/card-article',
    notes: addNotes(require('./card-article.md')),
});
