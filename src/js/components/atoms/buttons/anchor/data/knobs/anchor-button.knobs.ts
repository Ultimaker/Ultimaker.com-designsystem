import getData from '../examples/anchor-button.data';
import { text } from '@storybook/addon-knobs';

export default (type) => {
    const data = getData(type);

    return {
        className: text('className', data.className),
        text: text('text', data.text),
    };
};
