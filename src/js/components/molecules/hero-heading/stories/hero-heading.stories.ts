import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/hero-heading.data';
import knobsFormat from './hero-heading.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            data() {
                return {
                    slot: knobs.slot,
                };
            },
            props: {
                title: {
                    default: knobs.title,
                },
                subtitle: {
                    default: knobs.subtitle,
                },
            },
            template: require('./hero-heading.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/hero-heading',
    notes: addNotes(require('./hero-heading.md')),
});
