import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import getKnobs from '../data/data.knobs';

storiesOf('Atoms|list items', module)
    .addDecorator(withKnobs)
    .add('li-inline',
        () => {
            const knobs = getKnobs();

            return {
                props: {
                    item: {
                        default: knobs.item
                    },
                    type: {
                        default: knobs.type
                    }
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    );
