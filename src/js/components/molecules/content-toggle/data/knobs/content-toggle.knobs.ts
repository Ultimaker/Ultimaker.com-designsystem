import getData from '../examples/content-toggle.data';
import { boolean, text } from '@storybook/addon-knobs';

export default (type) => {
    const data = getData(type);

    return {
        collapsedIcon: text('collapsedIcon', data.collapsedIcon),
        collapsedText: text('collapsedText', data.collapsedText),
        expandedIcon: text('expandedIcon', data.expandedIcon),
        expandedText: text('expandedText', data.expandedText),
        toggleState: boolean('toggleState', data.toggleState),
    };
};
