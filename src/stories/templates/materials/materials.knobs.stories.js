import heroProductKnobs from '../../organisms/hero-product/hero-product.knobs.stories.js';
import ubrKnobs from '../../organisms/unique-buying-reasons/ubr.knobs.stories.js';
import examplesKnobs from '../../organisms/examples/examples.knobs.stories.js';
import colorsKnobs from '../../organisms/colors/colors.knobs.stories.js';

export default () => ({
    heroProduct: heroProductKnobs(),
    ubr: ubrKnobs(),
    examples: examplesKnobs(),
    colors: colorsKnobs()
});
