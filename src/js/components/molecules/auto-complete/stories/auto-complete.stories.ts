import { action } from '@storybook/addon-actions';

import { data } from '../data/auto-complete.data';
import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';
import knobsFormat from './auto-complete.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            storedLabel: {
                default: knobs.storedLabel,
            },
            storedItems: {
                default: knobs.storedItems,
            },
            datasource: {
                default: knobs.datasource,
            },
            suggestionsLabel: {
                default: knobs.suggestionsLabel,
            },
            defaultOpen: {
                default: knobs.defaultOpen,
            },
        },
        methods: {
            input: action('input'),
            close: action('close'),
            changeFocus: action('changeFocus'),
        },
        template: require('./auto-complete.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules|auto-complete',
    notes: addNotes(require('./auto-complete.md')),
});
