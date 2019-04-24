import { data } from '../data/examples/anchor-button.data';
import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';
import knobsFormat from 'components/atoms/buttons/button/data/knobs/button.knobs-format';

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
            template: require('./anchor-button.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Atoms|buttons/anchor',
    notes: addNotes(require('components/atoms/buttons/button/stories/button.md')),
});
