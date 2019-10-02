/** @format */
import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/icon-button.data';
import knobsFormat from './icon-button.knobs-format';

const getStory = (type: string): Function => (): object => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            buttonAriaLabel: { default: knobs.buttonAriaLabel },
            buttonClass: { default: knobs.buttonClass },
            disabled: { default: knobs.disabled },
            iconName: { default: knobs.iconName },
            preventDefault: { default: knobs.preventDefault },
            slotText: { default: knobs.slotText },
        },
        template: require('./icon-button.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/icon-button',
    notes: addNotes(require('./icon-button.md')),
});
