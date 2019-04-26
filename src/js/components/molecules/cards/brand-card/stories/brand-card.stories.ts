import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import knobsFormat from './brand-card.knobs-format';
import { data } from '../data/brand-card.data';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            props: {
                card: { default: knobs.card },
            },
            template: require('./brand-card.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules|cards/brand-card',
    notes: addNotes(require('./brand-card.md')),
});
