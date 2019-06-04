import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/card-download.data';
import knobsFormat from './card-download.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            title: { default: knobs.title },
            image: { default: knobs.image },
            name: { default: knobs.name },
            file: { default: knobs.file },
            description: { default: knobs.description },
            selected: { default: knobs.selected },
        },
        template: require('./card-download.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules|cards/card-download',
    notes: addNotes(require('./card-download.md')),
});
