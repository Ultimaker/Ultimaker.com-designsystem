import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/page-footer.data';
import knobsFormat from './page-footer.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            navigation: { default: knobs.navigation },
            localeSelector: { default: knobs.localeSelector },
            legalNavigation: { default: knobs.legalNavigation },
            country: { default: knobs.country },
            copyrightLabel: { default: knobs.copyrightLabel },
            language: { default: knobs.language },
        },
        template: require('./page-footer.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/page-footer',
    notes: addNotes(require('./page-footer.md')),
});
