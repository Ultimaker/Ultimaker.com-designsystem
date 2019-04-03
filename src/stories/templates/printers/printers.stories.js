import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import headerKnobs from '@root/src/stories/organisms/page-header/page-header.knobs.stories';
import footerKnobs from '@root/src/stories/organisms/page-footer/page-footer.knobs.stories';
import heroProductsApplicationKnobs
    from '@root/src/stories/organisms/hero-products-application/hero-products-application.knobs.stories';
import brandsKnobs from '@root/src/stories/organisms/brands/brands.knobs.stories';
import sliderRevealKnobs from '@root/src/stories/organisms/slider-reveal/slider-reveal.knobs.stories';
import examplesKnobs from '@root/src/stories/organisms/examples/examples.knobs.stories';
import exploreKnobs from '@root/src/stories/organisms/explore/explore.knobs.stories';
import ecosystemKnobs from '@root/src/stories/organisms/ecosystem/ecosystem.knobs.stories';
import casesKnobs from '@root/src/stories/organisms/cases/cases.knobs.stories';
import generalContentKnobs from '@root/src/stories/organisms/general-content/general-content.knobs.stories';

storiesOf('templates|printers', module)
    .addDecorator(withKnobs)
    .add('Printers', () => {
        return {
            data: () => ({
                ... headerKnobs(),
                ... footerKnobs()
            }),
            props: {
                heroProductsApplication: {default: heroProductsApplicationKnobs().heroProductsApplication},
                brands: {default: brandsKnobs().brands},
                slider: {default: sliderRevealKnobs().slider},
                examples: {default: examplesKnobs().examples},
                explore: {default: exploreKnobs().explore},
                ecosystem: {default: ecosystemKnobs().ecosystem},
                cases: {default: casesKnobs().cases},
                generalContent: {default: generalContentKnobs().generalContent}
            },
            template: require('./printers.stories.html')
        };
    },
    {
        notes: {markdown: require('./printers.stories.md')}
    });
