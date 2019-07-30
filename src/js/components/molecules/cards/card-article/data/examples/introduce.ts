import { nylon } from 'components/atoms/c-image/data/examples/c-image-nylon';

export const introduce = {
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
    image: nylon,
    labels: [{ label: 'Aerospace' }, { label: 'End-user parts' }, { label: 'Manufacturing aids' }, { label: 'Product development' }],
    title: 'How to successfully introduce 3D printing in your business',
    type: 'CardArticle',
    url:
        'https://ultimaker.com/en/stories/52698-new-lab-innovators-print-their-way-to-faster-iterations-and-design-freedom',
};
