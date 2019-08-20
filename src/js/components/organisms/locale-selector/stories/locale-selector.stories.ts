/** @format */
import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/locale-selector.data';
import knobsFormat from './locale-selector.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            datasource: { default: knobs.datasource },
            eventLocaleChanged: { default: knobs.eventLocaleChanged },
            highlightedLabel: { default: knobs.highlightedLabel },
            iconName: { default: knobs.iconName },
            initialIsoCode: { default: knobs.initialIsoCode },
            label: { default: knobs.label },
            placeholder: { default: knobs.placeholder },
            showSuggestions: { default: knobs.showSuggestions },
            suggestionsLabel: { default: knobs.suggestionsLabel },
            type: { default: knobs.type },
        },
        template: require('./locale-selector.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/locale-selector',
    notes: addNotes(require('./locale-selector.md')),
});
