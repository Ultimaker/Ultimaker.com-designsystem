import { data } from '../data/select-box.data';
import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';
import knobsFormat from './select-box.knobs-format';

const getStory = (type: string): object => (): object => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            datasource: { default: knobs.datasource },
            initialItem: { default: knobs.initialItem },
            label: { default: knobs.label },
            name: { default: knobs.name },
            placeholder: { default: knobs.placeholder },
        },
        template: require('./select-box.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules|select-box',
    notes: addNotes(require('./select-box.md')),
});
