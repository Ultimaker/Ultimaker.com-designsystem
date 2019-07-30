import { pva } from 'components/atoms/c-image/data/examples/c-image-pva';

export const printingGuide = {
    clickEvent: {
        data: {
            ctaLabel: 'test card article click',
            ctaType: 'TEST',
            sectionName: 'Storybook Card Article',
            type: 'AnalyticalEventData',
        },
        name: 'linkToCardContent',
        type: 'AnalyticalEvent',
    },
    description:
        '3D printer manufacturers don’t always communicate the full cost of owning their products. Discover 3D printing’s full cost breakdown, so you can avoid any hidden costs.',
    image: pva,
    labels: ['Aerospace', 'Humanitarian', 'Research', 'Medicine', 'Manufacturing aids', 'Product development'],
    title: '3D printing: The total cost of ownership',
    type: 'CardArticle',
    url:
        'https://3d.ultimaker.com/setup-to-success-3d-printing-guide?utm_source=ultimaker.com&utm_medium=knowledge',
};
