import headerKnobs from '../../organisms/page-header/page-header.knobs.stories';
import footerKnobs from '../../organisms/page-footer/page-footer.knobs.stories';
import heroVideo from '../../organisms/hero-video/hero-video.knobs.stories';

export default () => ({
    ... headerKnobs(),
    ... footerKnobs(),
    ... heroVideo(),
    _subNav: {
        page: {
            links: {
                siblings: [
                    {
                        title: 'test',
                        href: '#test',
                        icon: {
                            'thumbsquare_desktop': '/generator/svg/60/60',
                            'thumbsquare_mobile': '/generator/svg/120/120'
                        }
                    }
                ]
            }
        }
    }
});
