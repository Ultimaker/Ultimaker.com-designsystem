import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/sup.data';
import knobsFormat from './sup.knobs-format';

const getStory = type => () => {
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
        template: '<p>The <b>Pythagorean theorem</b> is often expressed as the following equation: <var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>{{ text }}</sup></var></p>',
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms|text/inline/sup',
    notes: addNotes(require('../../inline.md')),
});
