import {storiesOf} from '@storybook/vue';
import {withKnobs, text} from '@storybook/addon-knobs';
import data from './hero-text.stories.json';

storiesOf('organisms|hero', module)
    .addDecorator(withKnobs)
    .add(
        'Hero text',
        () => {
            const title = text('Title', data.title),
                contents = text('Content', data.contents);

            return {
                data: () => ({
                    heroText: {
                        title,
                        contents
                    }

                }),
                template: require('./hero-text.stories.html')
            };
        },
        {
            notes: {markdown: require('./hero-text.stories.md')}
        }
    );

