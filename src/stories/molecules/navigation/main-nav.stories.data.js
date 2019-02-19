import flyoutData from './flyout.stories.json';

export default {
    items: [
        {
            items: flyoutData.items,
            label: 'Nav section one',
            url: '#nav-one'
        },
        {
            items: flyoutData.items,
            label: 'Nav section two',
            url: '#nav-two'
        },
        {
            label: 'Nav section three',
            url: '#nav-three'
        },
        {
            items: flyoutData.items,
            label: 'Nav section four',
            url: '#nav-four'
        }
    ]
};
