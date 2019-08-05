import { toughPLA } from 'components/atoms/c-image/data/examples/c-image-tough-pla';

export const stopWasting = {
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
        'FFF 3D printing is revolutionizing production processes. In this guide, find out how adopting 3D printing has streamlined processes and cut costs across a range of industries, from automotive engineering to the beauty industry.',
    image: toughPLA,
    labels: ['Aerospace', 'Automotive', 'Fashion', 'Humanitarian', 'Manufacturing aids', 'Product development'],
    title: '5 ways to stop wasting money on production processes',
    type: 'CardArticle',
    url:
        'https://3d.ultimaker.com/5-ways-to-stop-wasting-money?utm_source=ultimaker.com&utm_medium=knowledge',
};
