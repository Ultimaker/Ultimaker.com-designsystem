import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import headerKnobs from '@root/src/stories/organisms/page-header/page-header.knobs.stories';
import footerKnobs from '@root/src/stories/organisms/page-footer/page-footer.knobs.stories';
import subNavigationKnobs from '../../organisms/subnavigation/subnavigation.stories.knobs';
import heroCoverKnobs from '../../organisms/hero-cover/hero-cover.knobs.stories';
import tabbedContentKnobs from '../../organisms/tabbed-content/tabbed-content.knobs.stories';
import tabbedSequenceKnobs from '../../organisms/tabbed-sequence/tabbed-sequence.knobs.stories';

import overviewData from 'organisms-page/overview/data/examples/card-product';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add('Materials overview',
        () => {
            return {
                data: () => ({
                    ... headerKnobs(),
                    ... footerKnobs()
                }),
                props: {
                    subNavigationKnobs: {default: subNavigationKnobs().subnavigation},
                    heroCover: {default: heroCoverKnobs().heroCover},
                    overview: {default: overviewData},
                    tabbedContent: {default: tabbedContentKnobs().TabbedContent},
                    tabbedSequence: {default: tabbedSequenceKnobs().TabbedSequence}
                },
                template: require('./materials.stories.html')
            };
        },
        {
            notes: {markdown: require('./materials.stories.md')}
        }
    );
