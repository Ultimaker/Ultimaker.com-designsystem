import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import getKnobs from '../data/data.knobs';

storiesOf('Atoms|anchors', module)
    .addDecorator(withKnobs)
    .add('anchor-overlay',
        () => {
            const knobs = getKnobs();

            return {
                props: {
                    title: {
                        default: knobs.title
                    },
                    url: {
                        default: knobs.url
                    }
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    );
