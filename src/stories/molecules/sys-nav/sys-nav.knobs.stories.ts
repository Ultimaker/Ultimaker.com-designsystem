import { text } from '@storybook/addon-knobs';
import data from './sys-nav.stories.json';

export default () => ({
    sysNav: {
        orderNowLabel: text('SysNav - Order now', data.sysNav.orderNowLabel),
        searchLabel: text('SysNav - Search', data.sysNav.searchLabel),
    },
});
