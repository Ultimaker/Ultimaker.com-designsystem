import headerKnobs from '../../organisms/page-header/page-header.knobs.stories';
import footerKnobs from '../../organisms/page-footer/page-footer.knobs.stories';
import heroCover from '../../organisms/hero-cover/hero-cover.knobs.stories';
import subNavigationKnobs from '../../organisms/subnavigation/subnavigation.stories.knobs';

export default () => ({
    ... headerKnobs(),
    ... footerKnobs(),
    ... heroCover(),
    ... subNavigationKnobs()
});
