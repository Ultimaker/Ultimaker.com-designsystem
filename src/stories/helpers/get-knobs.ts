import { boolean, number, object, text } from '@storybook/addon-knobs';

export default (data, knobsFormat) => {
    const result: {[key: string]: any} = {};

    Object.keys(knobsFormat).forEach(
        (property) => {
            if (typeof data[property] === 'string') {
                result[property] = text(property, data[property]);
            } else if (typeof data[property] === 'boolean') {
                result[property] = boolean(property, data[property]);
            } else if (typeof data[property] === 'number') {
                result[property] = number(property, data[property]);
            } else {
                result[property] = object(property, data[property]);
            }
        },
    );

    return result;
};
