import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import headerKnobs from 'src/stories/organisms/page-header/page-header.knobs.stories';
import footerKnobs from 'src/stories/organisms/page-footer/page-footer.knobs.stories';
import heroProductsApplicationKnobs
    from 'src/stories/organisms/hero-products-application/hero-products-application.knobs.stories';
import brandsKnobs from 'src/stories/organisms/__LEGACY__brands/legacy-brands.knobs.stories';
import sliderRevealKnobs from 'src/stories/organisms/slider-reveal/slider-reveal.knobs.stories';
import examplesKnobs from 'src/stories/organisms/examples/examples.knobs.stories';
import exploreKnobs from 'src/stories/organisms/explore/explore.knobs.stories';
import ecosystemKnobs from 'src/stories/organisms/ecosystem/ecosystem.knobs.stories';
import casesKnobs from 'src/stories/organisms/cases/cases.knobs.stories';
import generalContentKnobs from 'src/stories/organisms/general-content/general-content.knobs.stories';

storiesOf('templates|printers', module)
    .addDecorator(withKnobs)
    .add('Printers', () => ({
        data: () => ({
            ...headerKnobs(),
            ...footerKnobs(),
        }),
        props: {
            heroProductsApplication: { default: heroProductsApplicationKnobs().heroProductsApplication },
            brands: { default: brandsKnobs().brands },
            slider: { default: sliderRevealKnobs().slider },
            examples: { default: examplesKnobs().examples },
            explore: { default: exploreKnobs().explore },
            ecosystem: { default: ecosystemKnobs().ecosystem },
            cases: { default: casesKnobs().cases },
            generalContent: { default: generalContentKnobs().generalContent },
        },
        template: require('./printers.stories.html'),
    }),
    {
        notes: { markdown: require('./printers.stories.md') },
    });
