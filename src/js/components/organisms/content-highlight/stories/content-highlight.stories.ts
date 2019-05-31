import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/content-highlight.data';
import knobsFormat from './content-highlight.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            title: { default: knobs.title },
            subtitle: { default: knobs.subtitle },
            description: { default: knobs.description },
            image: { default: knobs.image },
            ctas: { default: knobs.ctas },
            reversed: { default: knobs.reversed },
        },
        template: require('./content-highlight.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/content-highlight',
    notes: addNotes(require('./content-highlight.md')),
});
