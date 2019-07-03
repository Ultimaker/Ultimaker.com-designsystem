import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/main-navigation-item.data';
import knobsFormat from './main-navigation-item.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            props: {
                label: { default: knobs.label },
                url: { default: knobs.url },
                categories: { default: knobs.categories },
            },
            template: require('./main-navigation-item.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/main-navigation-item',
    notes: addNotes(require('./main-navigation-item.md')),
});
