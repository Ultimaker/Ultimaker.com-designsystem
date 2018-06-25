import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import HeroProduct from 'organisms-page/hero-product';
import Ubr from 'organisms-page/ubr';
import Examples from 'organisms-page/examples';
import Colors from 'organisms-page/colors';
import data from './materials.stories.data';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add(
        'Materials',
        () => {
            return {
                components: {
                    HeroProduct,
                    Ubr,
                    Examples,
                    Colors
                },
                data: () => ({
                    ...data
                }),
                template: require('./materials.stories.html')
            };
        },
        {
            notes: {markdown: require('./materials.stories.md')}
        }
    );
