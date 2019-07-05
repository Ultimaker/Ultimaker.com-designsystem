import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { data as header } from 'src/js/components/organisms/page-header/data/page-header.data';
import { data as footer } from 'src/js/components/organisms/page-footer/data/page-footer.data';
import subNavigationKnobs from '../../organisms/subnavigation/subnavigation.stories.knobs';
import heroCoverKnobs from '../../organisms/hero-cover/hero-cover.knobs.stories';
import tabbedContentKnobs from '../../organisms/tabbed-content/tabbed-content.knobs.stories';
import tabbedSequenceKnobs from '../../organisms/tabbed-sequence/tabbed-sequence.knobs.stories';
import ubrOverview from 'src/js/components/organisms-page/overview-ubr/data/overview-ubr.data';

import { cardProducts } from 'organisms/overview/data/examples/card-products';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add('Materials overview',
        () => ({
            props: {
                header: { default: header.default },
                footer: { default: footer.default },
                subNavigationKnobs: { default: subNavigationKnobs().subnavigation },
                heroCover: { default: heroCoverKnobs().heroCover },
                overview: { default: cardProducts },
                tabbedContent: { default: tabbedContentKnobs().TabbedContent },
                tabbedSequence: { default: tabbedSequenceKnobs().TabbedSequence },
                ubrOverview: { default: ubrOverview(4) },
            },
            template: require('./materials.stories.html'),
        }),
        {
            notes: require('./materials.stories.md'),
        });
