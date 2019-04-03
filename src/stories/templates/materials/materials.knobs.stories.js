import headerKnobs from '../../organisms/page-header/page-header.knobs.stories';
import footerKnobs from '../../organisms/page-footer/page-footer.knobs.stories';
import heroVideo from '../../organisms/hero-video/hero-video.knobs.stories';
import subNavigationKnobs from '../../organisms/subnavigation/subnavigation.stories.knobs';

export default () => ({
    ... headerKnobs(),
    ... footerKnobs(),
    ... heroVideo(),
    ... subNavigationKnobs()
});
