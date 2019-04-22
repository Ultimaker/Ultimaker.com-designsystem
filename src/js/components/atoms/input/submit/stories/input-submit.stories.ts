import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import getKnobs from '../data/knobs/input-submit.knobs';

const getNotes = () => {
    return {
        notes: require('../../../button/stories/button.stories.md'),
    };
};

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(type);

        return {
            props: {
                className: {
                    default: knobs.className,
                },
                text: {
                    default: knobs.text,
                },
            },
            template: require('./input-submit.stories.html'),
        };
    };
};

storiesOf('Atoms|buttons/input/submit', module)
    .addDecorator(withKnobs)
    .add(
        'default',
        getStory('default'),
        getNotes(),
    )
    .add(
        'primary',
        getStory('primary'),
        getNotes(),
    )
    .add(
        'secondary',
        getStory('secondary'),
        getNotes(),
    );
