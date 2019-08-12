import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/overview-ubr.data';
import knobsFormat from './overview-ubr.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            ctas: { default: knobs.ctas },
            items: { default: knobs.items },
            subtitle: { default: knobs.subtitle },
            title: { default: knobs.title },
        },
        template: require('./overview-ubr.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/overview-ubr',
    notes: addNotes(require('./overview-ubr.md')),
});
