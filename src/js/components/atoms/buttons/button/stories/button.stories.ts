import { data } from '../data/examples/button.data';
import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';
import knobsFormat from '../data/knobs/button.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            props: {
                className: {
                    default: knobs.className,
                },
                text: {
                    default: knobs.text,
                },
            },
            template: require('./button.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms|buttons/button',
    notes: addNotes(require('./button.md')),
});
