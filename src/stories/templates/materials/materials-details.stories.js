import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { data as header } from 'src/js/components/organisms/page-header/data/page-header.data';
import { languageAndCountry as footer } from 'src/js/components/organisms/page-footer/data/page-footer.data';
import { data as subnavigation } from 'src/js/components/organisms/subnavigation/data/subnavigation.data';
import { data as heroProduct } from 'organisms/hero-product/data/hero-product.data';
import { data as tabbedContent } from 'src/js/components/organisms/tabbed-content/data/tabbed-content.data';
import { data as colors } from 'organisms/colors/data/colors.data';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add('Materials details',
        () => ({
            props: {
                header: { default: header.default },
                footer: { default: footer },
                subNavigationKnobs: { default: subnavigation.default },
                heroProduct: { default: heroProduct.default },
                tabbedContent: { default: tabbedContent.default },
                colors: { default: colors.default },
            },
            template: require('./materials-details.stories.html'),
        }),
        {
            notes: require('./materials-details.stories.md'),
        });
