import getData from '../examples/icon-button.data';
import { text } from '@storybook/addon-knobs';

export default (type) => {
    const data = getData(type);

    return {
        buttonAriaLabel: text('buttonAriaLabel', data.buttonAriaLabel),
        buttonClass: text('buttonClass', data.buttonClass),
        iconName: text('iconName', data.iconName),
        slot: text('slot', data.slot),
    };
};
