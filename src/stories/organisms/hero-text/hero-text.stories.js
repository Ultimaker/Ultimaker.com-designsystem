import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import heroData from './hero-text.stories.json';
import TextUtils from 'utils/text-utils';

storiesOf('organisms|hero', module)
    .addDecorator(withKnobs)
    .add(
        'Hero text',
        () => {
            const title = text('Title', heroData.title),
                contents = object('Content', heroData.contents);

            return {
                data: () => ({
                    contents: TextUtils.htmlDecode(contents)
                }),
                inject: ['data'],
                template: require('./hero-text.stories.html')
            };
        },
        {
            notes: {markdown: require('./hero-text.stories.md')}
        }
    );

