import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object, boolean} from '@storybook/addon-knobs';
import GeneralContent from 'organisms-page/general-content';
import data from './general-content.stories.json';

storiesOf('organisms|general-content', module)
    .addDecorator(withKnobs)
    .add(
        'General content',
        () => {
            const title = text('Title', data.title),
                content = object('Text', data.text),
                link = text('Link', data.contentLink.text),
                reversed = boolean('Reversed', data.reversed),
                image = object('Image', data.image);

            return {
                components: {
                    GeneralContent
                },
                data: () => ({
                    generalContent: {
                        title,
                        text: content,
                        reversed,
                        link,
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
