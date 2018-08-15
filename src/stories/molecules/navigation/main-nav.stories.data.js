import flyoutData from './flyout.stories.json';

export default {
    items: [
        {
            itemId: 'nav-one',
            href: '#nav-one',
            title: 'Nav section one',
            sections: flyoutData.sections,
            active: false
        },
        {
            itemId: 'nav-two',
            href: '#nav-two',
            title: 'Nav section two',
            sections: flyoutData.sections,
            active: false
        },
        {
            itemId: 'nav-three',
            href: '#nav-three',
            title: 'Nav section three',
            active: false
        },
        {
            itemId: 'nav-four',
            href: '#nav-four',
            title: 'Nav section four',
            sections: flyoutData.sections,
            active: false
        }
    ],
    mainNavOpen: true
};
