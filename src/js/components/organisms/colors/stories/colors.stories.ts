import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/colors.data';
import knobsFormat from './colors.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            title: { default: knobs.title },
            subtitle: { default: knobs.subtitle },
            colorList: { default: knobs.colorList },
            colorCtas: { default: knobs.colorCtas },
            ctas: { default: knobs.ctas },
        },
        template: require('./colors.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/colors',
    notes: addNotes(require('./colors.md')),
});
