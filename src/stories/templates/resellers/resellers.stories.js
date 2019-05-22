import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import headerKnobs from 'src/stories/organisms/page-header/page-header.knobs.stories';
import footerKnobs from 'src/stories/organisms/page-footer/page-footer.knobs.stories';
import heroBasicKnobs from '../../organisms/hero-basic/hero-basic.knobs.stories';
import businessCardData from 'organisms-page/overview/data/examples/business-cards';

storiesOf('templates|resellers', module)
    .addDecorator(withKnobs)
    .add('Resellers overview',
        () => ({
            data: () => ({
                ...headerKnobs(),
                ...footerKnobs(),
            }),
            props: {
                heroBasic: { default: heroBasicKnobs().heroBasic },
                overviewData: { default: businessCardData },
            },
            template: require('./resellers.stories.html'),
        }),
        {
            notes: { markdown: require('./resellers.stories.md') },
        });
