import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/main-navigation-item.data';
import knobsFormat from './main-navigation-item.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            active: { default: knobs.active },
            categories: { default: knobs.categories },
            itemId: { default: knobs.itemId },
            label: { default: knobs.label },
            url: { default: knobs.url },
        },
        template: require('./main-navigation-item.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/main-navigation-item',
    notes: addNotes(require('./main-navigation-item.md')),
});
