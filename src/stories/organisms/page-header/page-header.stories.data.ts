import linkList from '../../molecules/navigation/main-nav.stories.data';

export default {
    navigation: [
        {
            linkList: linkList.linkList
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
