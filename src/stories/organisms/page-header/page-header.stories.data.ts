import linkList from '../../molecules/navigation/main-nav.stories.data';

export default {
    navigation: [
        {
            linkList: linkList.linkList
        }
    ],
    labels: {
        search: "Search",
        orderNow: "Order Now",
        searchPlaceholder: ""
    },
    cta: {
        label: 'i am a label',
        url: 'en/explore'
    },
    search: {
        label: 'I am a label',
        placeholder: 'I am a pleceholder'
    }
};
