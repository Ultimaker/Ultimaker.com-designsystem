import heroVideoKnobs from '../../organisms/hero-video/hero-video.knobs.stories.js';
import footerKnobs from '../../organisms/footer-content/footer-content.knobs.stories.js';
import subNavKnobs from '../../organisms/materials-subnav/materials-subnav.knobs.stories.js';

export default () => ({
    ... heroVideoKnobs(),
    ... footerKnobs(),
    ... subNavKnobs()
});
