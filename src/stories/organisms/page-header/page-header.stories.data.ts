import flyoutData from '../../molecules/navigation/flyout.stories.json';

export default {
    navigation: [
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
    ],
    cta: {
        label: 'Order Now',
        url: 'en/explore',
        icon: 'icon--store'
    },
    search: {
        label: 'Search',
        placeholder: 'I am a pleceholder'
    }
};
