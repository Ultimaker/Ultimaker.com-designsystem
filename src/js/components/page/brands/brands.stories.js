import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import data from './brands.data';

storiesOf('organisms|brands', module)
    .addDecorator(withKnobs)
    .add('Brands', () => {
        const title = text('Title', data.title);
        const brands = object('Brands', data.brands);

        return {
            data: () => ({
                title,
                brands
            }),
            template: `<brands :title="title" :brands="brands">slot</brands>`
        };
    });
