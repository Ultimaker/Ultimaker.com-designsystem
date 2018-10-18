import heroProductsApplicationKnobs from '../../organisms/hero-products-application/hero-products-application.knobs.stories.js';
import sliderRevealKnobs from '../../organisms/slider-reveal/slider-reveal.knobs.stories.js';
import brandsKnobs from '../../organisms/brands/brands.knobs.stories.js';
import examplesKnobs from '../../organisms/examples/examples.knobs.stories.js';
import exploreKnobs from '../../organisms/explore/explore.knobs.stories.js';
import ecosystemKnobs from '../../organisms/ecosystem/ecosystem.knobs.stories.js';
import casesKnobs from '../../organisms/cases/cases.knobs.stories.js';
import generalContentKnobs from '../../organisms/general-content/general-content.knobs.stories.js';
import footerKnobs from '../../organisms/footer-content/footer-content.knobs.stories.js';

export default () => ({
    ... heroProductsApplicationKnobs(),
    ... brandsKnobs(),
    ... sliderRevealKnobs(),
    ... examplesKnobs(),
    ... exploreKnobs(),
    ... ecosystemKnobs(),
    ... casesKnobs(),
    ... generalContentKnobs(),
    ... footerKnobs()
});
