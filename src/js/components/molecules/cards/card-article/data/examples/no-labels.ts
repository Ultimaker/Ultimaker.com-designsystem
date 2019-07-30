import { tinyCar } from 'components/atoms/c-image/data/examples/c-image-tiny-car';

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
        'IMI Precision Engineering, a world leader in motion and fluid control technologies, is a company dedicated to creating solutions that provide speed and precision for customer machinery. Using the Ultimaker S5 for in-house additive manufacturing, their team was able to save time and money on low-volume pieces, while also reducing energy consumption and enhancing production line performance.',
    image: tinyCar,
    title: 'Reducing costs and improving efficiency with the Ultimaker S5',
    type: 'CardArticle',
    url:
        'https://3d.ultimaker.com/successful-introduction-checklist?utm_source=ultimaker.com&utm_medium=knowledge',
};
