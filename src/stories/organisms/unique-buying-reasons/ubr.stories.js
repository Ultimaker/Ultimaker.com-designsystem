import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import Ubr from 'organisms-page/ubr';
import knobs from './ubr.knobs.stories.js';

storiesOf('organisms|unique-buying-reasons', module)
    .addDecorator(withKnobs)
    .add(
        'Unique buying reasons',
        () => {
            return {
                components: {
                    Ubr
                },
                data: () => ({
                    ubr: knobs()
                }),
                inject: ['data'],
                template: require('./ubr.stories.html')
            };
        },
        {
            notes: {markdown: require('./ubr.stories.md')}
        }
    );
