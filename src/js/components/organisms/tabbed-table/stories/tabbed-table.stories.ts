import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/tabbed-table.data';
import knobsFormat from './tabbed-table.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            ctas: { default: knobs.ctas },
            tabs: { default: knobs.tabs },
            subtitle: { default: knobs.subtitle },
            title: { default: knobs.title },
        },
        template: require('./tabbed-table.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Organisms/tabbed-table',
    notes: addNotes(require('./tabbed-table.md')),
});
