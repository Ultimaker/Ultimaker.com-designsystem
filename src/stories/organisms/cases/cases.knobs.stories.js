import {text, object} from '@storybook/addon-knobs';
import data from './cases.stories.json';

export default () => ({
    cases: {
        title: text('Cases - title', data.title),
        description: text('Cases - description', data.description),
        buttonIcon: text('Cases - button icon', data.buttonIcon),
        buttonLabel: text('Cases - button label', data.buttonLabel),
        image: object('Cases - image', data.image),
        videoId: text('Cases - description', data.videoId)
    }
});
