import { text } from '@storybook/addon-knobs';
import data from './sys-nav.stories.json';

export default () => ({
    sysNav: {
        orderNowLabel: text('SysNav - Order now label', data.sysNav.orderNowLabel),
        orderNowLink: text('SysNav - Order now link', data.sysNav.orderNowLink),
        searchLabel: text('SysNav - Search', data.sysNav.searchLabel),
    },
});
