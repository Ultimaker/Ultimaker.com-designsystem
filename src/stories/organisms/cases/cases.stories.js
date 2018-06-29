import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import data from './cases.stories.json';

storiesOf('organisms|cases', module)
    .addDecorator(withKnobs)
    .add(
        'Cases',
        () => {
            const title = text('Title', data.title),
                description = text('Description', data.description),
                buttonIcon = text('Button icon', data.buttonIcon),
                buttonLabel = text('Button label', data.buttonLabel),
                image = object('Image', data.image),
                videoId = text('Description', data.videoId);

            return {
                data: () => ({
                    cases: {
                        title,
                        description,
                        buttonIcon,
                        buttonLabel,
                        image,
                        videoId
                    }
                }),
                template: require('./cases.stories.html')
            };
        },
        {
            notes: {markdown: require('./cases.stories.md')}
        }
    );
