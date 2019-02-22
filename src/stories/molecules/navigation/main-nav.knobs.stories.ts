import {text} from '@storybook/addon-knobs';
import data from './main-nav.stories.json';

export default () => ({
    mainNavData: {
        items: data.items.map((item, index) => ({
            label: text(`Main nav title ${index+1}`, item.label),
            url: text(`Main nav title url ${index+1}`, item.url)
        }))
    }
});
