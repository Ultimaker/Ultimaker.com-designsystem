import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/page-header.data';
import knobsFormat from './page-header.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            mainNavOpen: { default: knobs.mainNavOpen },
            cta: { default: knobs.cta },
            search: { default: knobs.search },
            navigation: { default: knobs.navigation },
        },
        template: require('./page-header.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/page-header',
    notes: addNotes(require('./page-header.md')),
});
