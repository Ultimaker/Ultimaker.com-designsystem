import flyoutData from './flyout.stories.json';

export default {
    linkList: [
        {
            lists: flyoutData.lists,
            listHeading: {
                label: 'Nav section one',
                url: '#nav-one'
            }
        },
        {
            lists: flyoutData.lists,
            listHeading: {
                label: 'Nav section two',
                url: '#nav-two'
            }
        },
        {
            listHeading: {
                label: 'Nav section three',
                url: '#nav-three'
            }
        },
        {
            lists: flyoutData.lists,
            listHeading: {
                label: 'Nav section four',
                url: '#nav-four'
            }
        }
    ]
};
