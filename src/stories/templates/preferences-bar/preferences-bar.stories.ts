/** @format */
import { languageAndCountry as footer } from 'components/organisms/page-footer/data/examples/language-and-country';
import { data as header } from 'components/organisms/page-header/data/page-header.data';
import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from './data/preferences-bar.data';

import knobsFormat from './preferences-bar.knobs-format';

const getStory = (type) => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            footer: { default: footer },
            header: { default: header.default },
        },
        template: require('./preferences-bar.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'templates/preferences-bar',
    knobs: { escapeHTML: false },
});
