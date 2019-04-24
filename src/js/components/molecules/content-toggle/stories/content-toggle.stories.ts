import { action } from '@storybook/addon-actions';
import { data } from '../data/content-toggle.data';
import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';
import knobsFormat from 'components/molecules/content-toggle/stories/content-toggle.knobs-format';

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(
            data[type],
            knobsFormat,
        );

        return {
            methods: {
                toggle: action('toggle emitted'),
            },
            props: {
                collapsedIcon: {
                    default: knobs.collapsedIcon,
                },
                collapsedText: {
                    default: knobs.collapsedText,
                },
                expandedIcon: {
                    default: knobs.expandedIcon,
                },
                expandedText: {
                    default: knobs.expandedText,
                },
                toggleState: {
                    default: knobs.toggleState,
                },
            },
            template: require('./content-toggle.html'),
        };
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules|buttons/content-toggle',
    notes: addNotes(require('./content-toggle.md')),
});
