import data from './data';
import {object} from '@storybook/addon-knobs';

export default () => ({
    clickEvent: object('clickEvent', data)
});
