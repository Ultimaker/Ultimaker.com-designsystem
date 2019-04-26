import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/headings.data';
import knobsFormat from './headings.knobs-format';

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
            template: '<%type>{{ text }}</%type>'.replace(/%type/g, type),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms|text/headings',
    notes: addNotes(require('./headings.md')),
});
