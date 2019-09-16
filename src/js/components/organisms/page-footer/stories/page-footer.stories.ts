import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/page-footer.data';
import knobsFormat from './page-footer.knobs-format';

const getStory = (type: string): Function => (): object => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            copyrightLabel: { default: knobs.copyrightLabel },
            language: { default: knobs.language },
            countryCode: { default: knobs.countryCode },
            countrySelector: { default: knobs.countrySelector },
            eventCountryChanged: { default: knobs.eventCountryChanged },
            eventLanguageChanged: { default: knobs.eventLanguageChanged },
            languageCode: { default: knobs.languageCode },
            legalNavigation: { default: knobs.legalNavigation },
            localeSelector: { default: knobs.localeSelector },
            navigation: { default: knobs.navigation },
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
