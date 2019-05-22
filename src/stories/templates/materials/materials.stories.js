import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import headerKnobs from 'src/stories/organisms/page-header/page-header.knobs.stories';
import footerKnobs from 'src/stories/organisms/page-footer/page-footer.knobs.stories';
import subNavigationKnobs from '../../organisms/subnavigation/subnavigation.stories.knobs';
import heroCoverKnobs from '../../organisms/hero-cover/hero-cover.knobs.stories';
import tabbedContentKnobs from '../../organisms/tabbed-content/tabbed-content.knobs.stories';
import tabbedSequenceKnobs from '../../organisms/tabbed-sequence/tabbed-sequence.knobs.stories';
import ubrOverview from 'src/js/components/organisms-page/overview-ubr/data/overview-ubr.data';

import overviewData from 'organisms-page/overview/data/examples/card-product';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add('Materials overview',
        () => ({
            data: () => ({
                ...headerKnobs(),
                ...footerKnobs(),
            }),
            props: {
                subNavigationKnobs: { default: subNavigationKnobs().subnavigation },
                heroCover: { default: heroCoverKnobs().heroCover },
                overview: { default: overviewData },
                tabbedContent: { default: tabbedContentKnobs().TabbedContent },
                tabbedSequence: { default: tabbedSequenceKnobs().TabbedSequence },
                ubrOverview: { default: ubrOverview(4) },
            },
            template: require('./materials.stories.html'),
        }),
        {
            notes: { markdown: require('./materials.stories.md') },
        });
