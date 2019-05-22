import { ctas } from './examples/1-cta.data';
import { items3 } from './examples/3-items.data';
import { items4 } from './examples/4-items.data';
import { items6 } from './examples/6-items.data';
import { items9 } from './examples/9-items.data';
import { limit3Small6Large } from './examples/limit-3small-6large.data';
import { limit4Small6Large } from './examples/limit-4small-6large.data';
import { limit4Small } from './examples/limit-4small.data';
import { limit6Large } from './examples/limit-6large.data';

export const data = {
    default: {
        ctas,
        items: items9,
        limit: limit4Small6Large,
        subtitle: 'You could be one too!',
        title: 'Ultimaker Brands',
    },
    items6LimitSmall4Large6: {
        ctas,
        items: items6,
        limit: limit4Small6Large,
        subtitle: 'You could be one too!',
        title: 'Ultimaker Brands',
    },
    items3LimitSmall4Large6: {
        ctas,
        items: items3,
        limit: limit4Small6Large,
        subtitle: 'You could be one too!',
        title: 'Ultimaker Brands',
    },
    items4LimitSmall3Large6: {
        ctas,
        items: items4,
        limit: limit3Small6Large,
        subtitle: 'You could be one too!',
        title: 'Ultimaker Brands',
    },
    items9LimitSmall4: {
        ctas,
        items: items9,
        limit: limit4Small,
        subtitle: 'You could be one too!',
        title: 'Ultimaker Brands',
    },
    items9LimitLarge6: {
        ctas,
        items: items9,
        limit: limit6Large,
        subtitle: 'You could be one too!',
        title: 'Ultimaker Brands',
    },
    items9LimitNone: {
        ctas,
        items: items9,
        subtitle: 'You could be one too!',
        title: 'Ultimaker Brands',
    },
};
