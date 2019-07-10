import { toughPLA } from 'components/atoms/c-image/data/examples/c-image-tough-pla';

export const noLabels = {
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
        'You know that 3D printing will save money and accelerate development. But introducing a new pilot can be a daunting process – especially if stakeholders are skeptical. Thankfully this free checklist does the heavy lifting.',
    image: toughPLA,
    title: 'How to successfully introduce 3D printing in your business',
    type: 'CardArticle',
    url:
        'https://3d.ultimaker.com/successful-introduction-checklist?utm_source=ultimaker.com&utm_medium=knowledge',
};
