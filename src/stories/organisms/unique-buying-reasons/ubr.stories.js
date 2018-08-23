import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import Ubr from 'organisms-page/ubr';
import ubrData from './ubr.stories.json';

storiesOf('organisms|unique-buying-reasons', module)
    .addDecorator(withKnobs)
    .add(
        'Unique buying reasons',
        () => {
            const title = text('Title', ubrData.title),
                description = text('Description', ubrData.description),
                image = object('Image', ubrData.image),
                reasons = object('Reasons', ubrData.reasons);

            return {
                components: {
                    Ubr
                },
                data: () => ({
                    title,
                    description,
                    image,
                    reasons
                }),
                inject: ['data'],
                template: require('./ubr.stories.html')
            };
        },
        {
            notes: {markdown: require('./ubr.stories.md')}
        }
    );
