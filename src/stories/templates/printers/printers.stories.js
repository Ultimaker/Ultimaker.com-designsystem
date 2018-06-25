import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import HeroProductsApplication from 'organisms-page/hero-products-application';
import Brands from 'organisms-page/brands';
import SliderReveal from 'organisms-page/slider-reveal';
import Examples from 'organisms-page/examples';
import Explore from 'organisms-page/explore';
import Ecosystem from 'organisms-page/ecosystem';
import Cases from 'organisms-page/cases';
import GeneralContent from 'organisms-page/general-content';
import data from './printers.stories.data';

storiesOf('templates|printers', module)
    .addDecorator(withKnobs)
    .add(
        'Printers',
        () => {
            return {
                components: {
                    HeroProductsApplication,
                    Brands,
                    SliderReveal,
                    Examples,
                    Explore,
                    Ecosystem,
                    Cases,
                    GeneralContent
                },
                data: () => ({
                    ...data
                }),
                template: require('./printers.stories.html')
            };
        },
        {
            notes: {markdown: require('./printers.stories.md')}
        }
    );
