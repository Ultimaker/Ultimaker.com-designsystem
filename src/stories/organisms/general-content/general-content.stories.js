import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object, boolean} from '@storybook/addon-knobs';
import data from './general-content.stories.json';

storiesOf('organisms|general-content', module)
    .addDecorator(withKnobs)
    .add(
        'General content',
        () => {
            const title = text('Title', data.title),
                content = object('Text', data.text),
                contentLink = object('Link', data.contentLink),
                reversed = boolean('Reversed', data.reversed),
                image = object('Image', data.image);

            return {
                data: () => ({
                    generalContent: {
                        title,
                        text: content,
                        reversed,
                        contentLink,
                        image
                    }
                }),
                template: require('./general-content.stories.html')
            };
        },
        {
            notes: {markdown: require('./general-content.stories.md')}
        }
    );
