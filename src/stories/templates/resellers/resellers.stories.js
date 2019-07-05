import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { data as header } from 'src/js/components/organisms/page-header/data/page-header.data';
import { data as footer } from 'src/js/components/organisms/page-footer/data/page-footer.data';
import heroBasicKnobs from '../../organisms/hero-basic/hero-basic.knobs.stories';
import { businessCards } from 'organisms/overview/data/examples/business-cards';

storiesOf('templates|resellers', module)
    .addDecorator(withKnobs)
    .add('Resellers overview',
        () => ({
            props: {
                header: { default: header.default },
                footer: { default: footer.default },
                heroBasic: { default: heroBasicKnobs().heroBasic },
                overviewData: { default: businessCards },
            },
            template: require('./resellers.stories.html'),
        }),
        {
            notes: require('./resellers.stories.md'),
        });
