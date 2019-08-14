import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { data as header } from 'src/js/components/organisms/page-header/data/page-header.data';
import { data as footer } from 'src/js/components/organisms/page-footer/data/page-footer.data';
import { data as heroBasic } from 'src/js/components/organisms/hero-basic/data/hero-basic.data';
import { businessCard } from 'src/js/components/molecules/cards/business-card/data/business-card.data';

storiesOf('templates|resellers', module)
    .addDecorator(withKnobs)
    .add('Resellers overview',
        () => ({
            props: {
                header: { default: header.default },
                footer: { default: footer.default },
                heroBasic: { default: heroBasic.heroBasic },
                overviewData: { default: [businessCard.default, businessCard.default] },
            },
            template: require('./resellers.stories.html'),
        }),
        {
            notes: require('./resellers.stories.md'),
        });
