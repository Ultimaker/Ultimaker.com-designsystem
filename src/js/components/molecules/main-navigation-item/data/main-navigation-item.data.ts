export const data = {
    default: {
        itemId: 1,
        active: false,
        label: 'Main navigation item',
        url: '/NavigationPageFixture',
        categories: [
            {
                label: 'Main navigation category 1',
                items: [
                    {
                        label: 'Navigation item with internal link',
                        url: '/NavigationPageFixture',
                    },
                    {
                        label: 'Navigation item with external link',
                        url: 'https://external.link',
                    },
                ],
                bottomItem: {
                    label: 'Navigation item with internal link',
                    url: '/NavigationPageFixture',
                },
            },
            {
                label: 'Main navigation category 2',
                items: [
                    {
                        label: 'Navigation item with external link',
                        url: 'https://external.link',
                    },
                    {
                        label: 'Navigation item with internal link',
                        url: '/NavigationPageFixture',
                    },
                ],
                bottomItem: {
                    label: 'Navigation item with external link',
                    url: 'https://external.link',
                },
            },
        ],
    },
};
