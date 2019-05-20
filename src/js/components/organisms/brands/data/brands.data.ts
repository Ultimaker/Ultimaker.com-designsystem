import { adLabDecathlonLogo } from 'components/molecules/brand/data/ad-lab-decathlon-logo';
import { volkswagenLogo } from 'components/molecules/brand/data/volkswagen-logo';
import { zeissLogo } from 'components/molecules/brand/data/zeiss-logo';

export const data = {
    default: {
        ctas: {
            ctas: [
                {
                    clickEvent: {
                        data: {
                            ctaLabel: 'Test content link',
                            ctaType: 'ContentLink',
                            ctaUrl: 'https://ultimaker.com',
                            type: 'AnalyticalEventData',
                        },
                        name: 'cta',
                        type: 'AnalyticalEvent',
                    },
                    icon: 'refresh',
                    label: 'Test content link',
                    type: 'ContentLink',
                    url: 'https://ultimaker.com',
                },
            ],
            type: 'CtaBlock',
        },
        items: [
            {
                type: 'Brand',
                image: zeissLogo,
            },
            {
                type: 'Brand',
                image: volkswagenLogo,
            },
            {
                type: 'Brand',
                image: adLabDecathlonLogo,
            },
            {
                type: 'Brand',
                image: zeissLogo,
            },
            {
                type: 'Brand',
                image: volkswagenLogo,
            },
            {
                type: 'Brand',
                image: adLabDecathlonLogo,
            },
            {
                type: 'Brand',
                image: zeissLogo,
            },
            {
                type: 'Brand',
                image: volkswagenLogo,
            },
            {
                type: 'Brand',
                image: adLabDecathlonLogo,
            },
        ],
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
        subtitle: 'You could be one too!',
        title: 'Ultimaker Brands',
    },
    noLimit: {
        ctas: {
            ctas: [],
            type: 'CtaBlock',
        },
        items: [
            {
                type: 'Brand',
                image: zeissLogo,
            },
            {
                type: 'Brand',
                image: volkswagenLogo,
            },
            {
                type: 'Brand',
                image: adLabDecathlonLogo,
            },
            {
                type: 'Brand',
                image: zeissLogo,
            },
            {
                type: 'Brand',
                image: volkswagenLogo,
            },
            {
                type: 'Brand',
                image: adLabDecathlonLogo,
            },
            {
                type: 'Brand',
                image: zeissLogo,
            },
            {
                type: 'Brand',
                image: volkswagenLogo,
            },
            {
                type: 'Brand',
                image: adLabDecathlonLogo,
            },
        ],
        subtitle: '',
        title: '',
    },
};
