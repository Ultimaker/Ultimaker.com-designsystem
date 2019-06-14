import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/article.data';
import knobsFormat from './article.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            props: {
            },
            template: require('./article.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/article',
    notes: addNotes(require('./article.md')),
});
