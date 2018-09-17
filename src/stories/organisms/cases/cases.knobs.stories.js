import {text, object, select} from '@storybook/addon-knobs';
import data from './cases.stories.json';
import {iconList} from '../../helpers/icons';
import {responsiveImage} from '../../helpers/images';

export default () => ({
    cases: {
        ... data,
        title: text('Cases - title', data.title),
        description: text('Cases - description', data.description),
        buttonIcon: select('Cases - button icon', iconList, data.buttonIcon),
        buttonLabel: text('Cases - button label', data.buttonLabel),
        image: responsiveImage('Cases - image', data.image)
    }
});
