import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/color.data';
import knobsFormat from './color.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            data() {
                return {};
            },
            props: {
                background: { default: knobs.background },
                activeColor: { default: knobs.activeColor },
            },
            template: require('./color.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/color',
    notes: addNotes(require('./color.md')),
});
