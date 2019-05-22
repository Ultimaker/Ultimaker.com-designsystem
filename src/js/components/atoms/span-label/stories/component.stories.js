import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import getKnobs from '../data/data.knobs';

storiesOf('Atoms|text', module)
    .addDecorator(withKnobs)
    .add('span-label',
        () => {
            const knobs = getKnobs();

            return {
                props: {
                    item: {
                        default: knobs.item,
                    },
                },
                template: require('./template.html'),
            };
        },
        {
            notes: require('./notes.md'),
        });
