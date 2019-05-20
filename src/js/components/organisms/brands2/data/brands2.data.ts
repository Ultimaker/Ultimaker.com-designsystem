import { adLabDecathlonLogo } from 'components/molecules/brand/data/ad-lab-decathlon-logo';
import { volkswagenLogo } from 'components/molecules/brand/data/volkswagen-logo';
import { zeissLogo } from 'components/molecules/brand/data/zeiss-logo';

export const data = {
    default: {
        ctas: {
            ctas: [],
            type: 'CtaBlock',
        },
        expand: {},
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
        ],
        limit: {},
        subtitle: '',
        title: '',
    },
};
