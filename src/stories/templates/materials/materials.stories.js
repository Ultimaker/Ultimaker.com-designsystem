import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { data as header } from 'src/js/components/organisms/page-header/data/page-header.data';
import { data as footer } from 'src/js/components/organisms/page-footer/data/page-footer.data';
import { data as subnavigation } from 'src/js/components/organisms/subnavigation/data/subnavigation.data';
import { data as heroCover } from 'src/js/components/organisms/hero-cover/data/hero-cover.data';
import { data as tabbedContent } from 'src/js/components/organisms/tabbed-content/data/tabbed-content.data';
import { data as ubrOverview } from 'src/js/components/organisms/overview-ubr/data/overview-ubr.data';

import { cardProducts } from 'organisms/overview/data/examples/card-products';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add('Materials overview',
        () => ({
            props: {
                header: { default: header.default },
                footer: { default: footer.default },
                subNavigationKnobs: { default: subnavigation.default },
                heroCover: { default: heroCover.default },
                overview: { default: cardProducts },
                tabbedContent: { default: tabbedContent.default },
                tabbedSequence: { default: tabbedContent.sequenced },
                ubrOverview: { default: ubrOverview.default },
            },
            template: require('./materials.stories.html'),
        }),
        {
            notes: require('./materials.stories.md'),
        });
