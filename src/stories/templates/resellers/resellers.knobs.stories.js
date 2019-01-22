import resellerKnobs from '../../organisms/resellers/resellers.knobs.stories.js';
import heroBasicKnobs from '../../organisms/hero-basic/hero-basic.knobs.stories';
import footerKnobs from '../../organisms/footer-content/footer-content.knobs.stories.js';

export default () => ({
    ...heroBasicKnobs(),
    ...resellerKnobs(),
    ...footerKnobs()
});
