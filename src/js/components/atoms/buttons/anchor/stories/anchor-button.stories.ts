import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import getKnobs from '../data/knobs/anchor-button.knobs';

const getNotes = () => {
    return {
        notes: require('../../button/stories/button.md'),
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
            template: require('./anchor-button.html'),
        };
    };
};

storiesOf('Atoms|buttons/anchor', module)
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
