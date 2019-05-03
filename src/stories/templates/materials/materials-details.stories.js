import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import headerKnobs from 'src/stories/organisms/page-header/page-header.knobs.stories';
import footerKnobs from 'src/stories/organisms/page-footer/page-footer.knobs.stories';
import subNavigationKnobs from '../../organisms/subnavigation/subnavigation.stories.knobs';
import {data as heroProduct} from 'organisms/hero-product/data/hero-product.data';
import tabbedContentKnobs from '../../organisms/tabbed-content/tabbed-content.knobs.stories';
import examplesKnobs from '../../organisms/examples/examples.knobs.stories';
import colorsKnobs from '../../organisms/colors/colors.knobs.stories';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add('Materials details',
        () => {
            return {
                data: () => ({
                    ... headerKnobs(),
                    ... footerKnobs()
                }),
                props: {
                    subNavigationKnobs: {default: subNavigationKnobs().subnavigation},
                    heroProduct: {default: heroProduct.default},
                    tabbedContent: {default: tabbedContentKnobs().TabbedContent},
                    examples: {default: examplesKnobs().examples},
                    colors: {default: colorsKnobs().colors}
                },
                template: require('./materials-details.stories.html')
            };
        },
        {
            notes: {markdown: require('./materials-details.stories.md')}
        }
    );
