import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/sub.data';
import knobsFormat from './sub.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            props: {
                text: {
                    default: knobs.text,
                },
            },
            template: '<p>Almost every developer’s favorite molecule is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>{{ text }}</sub>, also known as ”caffeine.”</p>',
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms|text/inline/sub',
    notes: addNotes(require('../../inline.md')),
});
