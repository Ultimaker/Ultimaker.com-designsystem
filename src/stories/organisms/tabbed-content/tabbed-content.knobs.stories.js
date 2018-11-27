import {text} from '@storybook/addon-knobs';
import data from './tabbed-content.stories.json';


export default () => ({
    tabbedContent: {
        title: text('Slider-reveal - title', data.title)
    }
});
