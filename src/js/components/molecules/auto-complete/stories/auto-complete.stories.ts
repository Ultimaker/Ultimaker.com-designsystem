/** @format */
import { action } from '@storybook/addon-actions';
import { data } from '../data/auto-complete.data';
import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';
import knobsFormat from './auto-complete.knobs-format';

const getStory = (type: string): object => (): object => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            datasource: { default: knobs.datasource },
            highlightedKeys: { default: knobs.highlightedKeys },
            highlightedLabel: { default: knobs.highlightedLabel },
            label: { default: knobs.label },
            minChar: { default: knobs.minChar },
            placeholder: { default: knobs.placeholder },
            showSuggestions: { default: knobs.showSuggestions },
            suggestionsLabel: { default: knobs.suggestionsLabel },
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
