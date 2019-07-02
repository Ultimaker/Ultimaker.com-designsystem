import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/footer-navigation-category.data';
import knobsFormat from './footer-navigation-category.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
        },
        template: require('./footer-navigation-category.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/footer-navigation-category',
    notes: addNotes(require('./footer-navigation-category.md')),
});
