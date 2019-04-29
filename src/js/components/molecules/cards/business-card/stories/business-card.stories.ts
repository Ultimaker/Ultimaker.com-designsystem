import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import knobsFormat from './business-card.knobs-format';
import { data } from '../data/business-card.data';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            props: {
                type: { default: knobs.type },
                title: { default: knobs.title },
                image: { default: knobs.image },
                contentLink: { default: knobs.contentLink },
                properties: { default: knobs.properties },
            },
            template: require('./business-card.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules|cards/business-card',
    notes: addNotes(require('./business-card.md')),
});
