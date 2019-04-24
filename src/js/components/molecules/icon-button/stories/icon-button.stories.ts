import { data } from '../data/icon-button.data';
import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';
import knobsFormat from 'components/molecules/icon-button/stories/icon-button.knobs-format';

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
                buttonAriaLabel: {
                    default: knobs.buttonAriaLabel,
                },
                buttonClass: {
                    default: knobs.buttonClass,
                },
                iconName: {
                    default: knobs.iconName,
                },
            },
            template: require('./icon-button.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules|buttons/icon-button',
    notes: addNotes(require('./icon-button.md')),
});
