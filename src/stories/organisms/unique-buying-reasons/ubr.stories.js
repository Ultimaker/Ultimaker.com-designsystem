import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import data from './ubr.stories.json';

storiesOf('organisms|ubr', module)
    .addDecorator(withKnobs)
    .add(
        'Unique buying reasons',
        () => {
            const title = text('Title', data.title),
                description = text('Description', data.description),
                image = object('Image', data.image),
                reasons = object('Reasons', data.reasons);

            return {
                data: () => ({
                    ubr: {
                        title,
                        description,
                        image,
                        reasons
                    }
                }),
                template: require('./ubr.stories.html')
            };
        },
        {
            notes: {markdown: require('./ubr.stories.md')}
        }
    );
