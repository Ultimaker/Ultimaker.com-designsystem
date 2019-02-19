import items from '../../molecules/navigation/main-nav.stories.data';

export default {
    navigation: [{
        items: items.items
    }],
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
