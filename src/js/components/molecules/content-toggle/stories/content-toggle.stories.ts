import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import getKnobs from '../data/knobs/content-toggle.knobs';

const getNotes = () => {
    return {
        notes: require('./content-toggle.md'),
    };
};

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(type);

        return {
            methods: {
                toggle: action('toggle'),
            },
            props: {
                collapsedIcon: {
                    default: knobs.collapsedIcon,
                },
                collapsedText: {
                    default: knobs.collapsedText,
                },
                expandedIcon: {
                    default: knobs.expandedIcon,
                },
                expandedText: {
                    default: knobs.expandedText,
                },
                toggleState: {
                    default: knobs.toggleState,
                },
            },
            template: require('./content-toggle.html'),
        };
    };
};

storiesOf('Molecules|buttons/content-toggle', module)
    .addDecorator(withKnobs)
    .add(
        'default',
        getStory('default'),
        getNotes(),
    );
