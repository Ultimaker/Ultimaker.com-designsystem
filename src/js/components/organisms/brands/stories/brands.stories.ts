import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/brands.data';
import knobsFormat from './brands.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            props: {
                ctas: { default: knobs.ctas },
                expand: { default: knobs.expand },
                items: { default: knobs.items },
                limit: { default: knobs.limit },
                subtitle: { default: knobs.subtitle },
                title: { default: knobs.title },
            },
            template: require('./brands.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/brands',
    notes: addNotes(require('./brands.md')),
});
