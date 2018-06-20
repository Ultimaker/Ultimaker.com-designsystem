import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object, boolean} from '@storybook/addon-knobs';
import data from './general-content.data';

storiesOf('organisms|general-content', module)
    .addDecorator(withKnobs)
    .add('General content', () => {
        const title = text('Title', data.title),
            content = text('Text', data.text),
            link = text('Link', data.contentLink.text),
            reversed = boolean('Reversed', data.reversed),
            image = object('Image', data.image);

        return {
            data: () => ({
                generalContent: {
                    title,
                    text: content,
                    reversed,
                    link,
                    image
                }
            }),
            template: `<general-content v-bind="generalContent"></general-content>`
        };
    });
