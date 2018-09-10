import {text, boolean, object} from '@storybook/addon-knobs';
import data from './general-content.stories.json';

export default () => ({
    generalContent: {
        title: text('General-content - title', data.title),
        text: object('General-content - text', data.text),
        contentLink: object('General-content - link', data.contentLink),
        reversed: boolean('General-content - reversed', data.reversed),
        image: object('General-content - image', data.image)
    }
});
