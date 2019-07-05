import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { data as header } from 'src/js/components/organisms/page-header/data/page-header.data';
import { data as footer } from 'src/js/components/organisms/page-footer/data/page-footer.data';
import heroProductsApplicationKnobs
    from 'src/stories/organisms/hero-products-application/hero-products-application.knobs.stories';
import { data as brands } from 'src/js/components/organisms/brands/data/brands.data';
import generalContentKnobs from 'src/stories/organisms/general-content/general-content.knobs.stories';

storiesOf('templates|printers', module)
    .addDecorator(withKnobs)
    .add('Printers', () => ({
        props: {
            header: { default: header.default },
            footer: { default: footer.default },
            heroProductsApplication: { default: heroProductsApplicationKnobs().heroProductsApplication },
            brands: { default: brands.default },
            generalContent: { default: generalContentKnobs().generalContent },
        },
        template: require('./printers.stories.html'),
    }),
    {
        notes: require('./printers.stories.md'),
    });
