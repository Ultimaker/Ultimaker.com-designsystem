/** @format */

import addNotes from 'src/stories/helpers/add-notes';
import addStories from 'src/stories/helpers/add-stories';
import getKnobs from 'src/stories/helpers/get-knobs';

import { data } from '../data/overview.data';
import { knobsFormat } from './overview.knobs-format';

const getStory = type => () => {
    const knobs = getKnobs(data[type], knobsFormat);

    return {
        props: {
            ctas: { default: knobs.ctas },
            sections: { default: knobs.sections },
            subtitle: { default: knobs.subtitle },
            title: { default: knobs.title },
        },
        template: require('./overview.html'),
    };
};

addStories({
    data,
    getStory,
    decorators: ['withKnobs'],
    kind: 'organisms/overview',
    notes: addNotes(require('./overview.md')),
});

// import { storiesOf } from '@storybook/vue';
// import cardProductData from 'organisms/overview/data/examples/card-product';
// import businessCardData from 'organisms/overview/data/examples/business-cards';
//
// storiesOf('organisms|overview', module)
//     .add('Overview business card',
//         () => ({
//             data: () => ({
//                 data: businessCardData,
//             }),
//             template: require('./template.html'),
//         }),
//         {
//             notes: require('./notes.md'),
//         })
//     .add('Overview card product',
//         () => ({
//             data: () => ({
//                 data: cardProductData,
//             }),
//             template: require('./template.html'),
//         }),
//         {
//             notes: require('./notes.md'),
//         });
