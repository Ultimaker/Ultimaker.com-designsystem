import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/article-intro.data';
import knobsFormat from './article-intro.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(
        data[type],
        knobsFormat,
    );

    return {
        props: {
            intro: { default: knobs.intro },
        },
        template: require('./article-intro.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'Molecules/article-intro',
});
