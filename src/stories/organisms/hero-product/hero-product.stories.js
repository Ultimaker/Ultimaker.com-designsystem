import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import data from './hero-product.data';

storiesOf('organisms|hero-product', module)
    .addDecorator(withKnobs)
    .add('Hero product', () => {
        const title = text('Title', data.title),
            text = text('Text', data.text),
            link = text('Link', data.contentLink.text),
            image = object('Image', data.image);

        return {
            data: () => ({
                generalContent: {
                    title,
                    text,
                    link,
                    image
                }
            }),
            template: `<examples v-bind="generalContent"></examples>`
        };
    });
