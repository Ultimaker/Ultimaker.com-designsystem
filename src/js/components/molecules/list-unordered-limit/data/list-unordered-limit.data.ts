import { adLabDecathlonLogo } from 'components/molecules/brand/data/ad-lab-decathlon-logo';
import { volkswagenLogo } from 'components/molecules/brand/data/volkswagen-logo';
import { zeissLogo } from 'components/molecules/brand/data/zeiss-logo';

export const data = {
    default: {
        listItems: {
            items: [
                {
                    item: {
                        type: 'Brand',
                        image: zeissLogo,
                    },
                    type: 'LiItem',
                },
                {
                    item: {
                        type: 'Brand',
                        image: volkswagenLogo,
                    },
                    type: 'LiItem',
                },
                {
                    item: {
                        type: 'Brand',
                        image: adLabDecathlonLogo,
                    },
                    type: 'LiItem',
                },
                {
                    item: {
                        type: 'Brand',
                        image: zeissLogo,
                    },
                    type: 'LiItem',
                },
                {
                    item: {
                        type: 'Brand',
                        image: volkswagenLogo,
                    },
                    type: 'LiItem',
                },
                {
                    item: {
                        type: 'Brand',
                        image: adLabDecathlonLogo,
                    },
                    type: 'LiItem',
                },
                {
                    item: {
                        type: 'Brand',
                        image: zeissLogo,
                    },
                    type: 'LiItem',
                },
                {
                    item: {
                        type: 'Brand',
                        image: volkswagenLogo,
                    },
                    type: 'LiItem',
                },
                {
                    item: {
                        type: 'Brand',
                        image: adLabDecathlonLogo,
                    },
                    type: 'LiItem',
                },
            ],
        },
        limit: {
            expand: {
                clickEvent: {
                    data: {
                        ctaLabel: 'Show all',
                        ctaType: 'ContentLink',
                        sectionName: 'Ultimaker Brands!',
                        type: 'AnalyticalEventData',
                    },
                    name: 'expandListSection',
                    type: 'AnalyticalEvent',
                },
                label: 'Show all',
                type: 'ContentButton',
            },
            largeScreen: 6,
            smallScreen: 4,
            type: 'Limit',
        },
    },
};
