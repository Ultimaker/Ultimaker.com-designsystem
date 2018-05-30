import { storiesOf } from '@storybook/vue';
import { withKnobs, text, object} from '@storybook/addon-knobs/vue';
import brandsData from 'src/js/components/page/brands/brands.data';
import casesData from 'src/js/components/page/cases/cases.data';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add('Materials', () => {
        const brandsKnob = object('Brands', brandsData),
        casesKnob = object('Cases', casesData);

        return {
            data: () => ({
                brandsData,
				casesData
            }),
            template: `
                <main>
                    <brands v-bind="brandsData"></brands>
                    <cases v-bind="casesData"></cases>
                </main>
            `
        }
});