import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import Brands from 'organisms-page/brands';
import data from './brands.stories.json';

storiesOf('organisms|brands', module)
    .addDecorator(withKnobs)
    .add(
        'Brands',
        () => {
            const title = text('Title', data.title);
            const brands = object('Brands', data.brands);

            return {
                components: {
                    Brands
                },
                data: () => ({
                    title,
                    brands
                }),
                template: require('./brands.stories.html')
            };
        },
        {
            notes: {markdown: require('./brands.stories.md')}
        }
    );
