import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/main-navigation.data';
import knobsFormat from './main-navigation.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            navigation: { default: knobs.navigation },
        },
        template: require('./main-navigation.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/main-navigation',
    notes: addNotes(require('./main-navigation.md')),
});
