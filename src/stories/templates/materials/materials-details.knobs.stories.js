import heroProductKnobs from '../../organisms/hero-product/hero-product.knobs.stories.js';
import ubrKnobs from '../../organisms/unique-buying-reasons/ubr.knobs.stories.js';
import examplesKnobs from '../../organisms/examples/examples.knobs.stories.js';
import colorsKnobs from '../../organisms/colors/colors.knobs.stories.js';
import footerKnobs from '../../organisms/footer-content/footer-content.knobs.stories.js';
import subNavKnobs from '../../organisms/materials-subnav/materials-subnav.knobs.stories.js';

export default () => ({
    ...heroProductKnobs(),
    ...ubrKnobs(),
    ...examplesKnobs(),
    ...colorsKnobs(),
    ... footerKnobs(),
    ... subNavKnobs()
});
