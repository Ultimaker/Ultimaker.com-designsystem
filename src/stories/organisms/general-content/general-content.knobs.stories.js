import { text, boolean, array } from '@storybook/addon-knobs';
import data from './general-content.stories.json';
import { responsiveImage } from '../../helpers/images';

export default () => ({
    generalContent: {
        reversed: boolean('General-content - content reversed', data.reversed),
        title: text('General-content - title', data.title),
        text: array('General-content - text', data.text),
        contentLink: {
            text: text('General-content - link', data.contentLink.text),
        },
        image: responsiveImage('General-content - image', data.image),
    },
});
