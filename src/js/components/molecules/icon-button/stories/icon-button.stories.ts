import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import getKnobs from '../data/knobs/icon-button.knobs';

const getNotes = () => {
    return {
        notes: require('./icon-button.md'),
    };
};

const getStory = (type) => {
    return () => {
        const knobs = getKnobs(type);

        return {
            data() {
                return {
                    slot: knobs.slot,
                };
            },
            props: {
                buttonAriaLabel: {
                    default: knobs.buttonAriaLabel,
                },
                buttonClass: {
                    default: knobs.buttonClass,
                },
                iconName: {
                    default: knobs.iconName,
                },
            },
            template: require('./icon-button.html'),
        };
    };
};

storiesOf('Molecules|buttons/icon-button', module)
    .addDecorator(withKnobs)
    .add(
        'default',
        getStory('default'),
        getNotes(),
    )
    .add(
        'default, no slot',
        getStory('defaultNoSlot'),
        getNotes(),
    )
    .add(
        'large',
        getStory('large'),
        getNotes(),
    )
    .add(
        'large, no slot',
        getStory('largeNoSlot'),
        getNotes(),
    )
    .add(
        'small',
        getStory('small'),
        getNotes(),
    )
    .add(
        'small, no slot',
        getStory('smallNoSlot'),
        getNotes(),
    )
    .add(
        'underline',
        getStory('underline'),
        getNotes(),
    )
    .add(
        'underline, no slot',
        getStory('underlineNoSlot'),
        getNotes(),
    );
