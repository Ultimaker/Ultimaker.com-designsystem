import { svg } from 'components/atoms/c-image/data/examples/c-image-svg';

const columnCtaButton = {
    type: 'ContentButton',
    label: 'Get a quote',
    url: '/en/quote',
};

const columnCtaLink = {
    type: 'ContentLink',
    label: 'Get a quote',
    url: '/en/quote',
};

export const data = {
    three: {
        title: 'Lorem ipsum dolor sit amet consectetur',
        subtitle: 'Donec pulvinar arcu lorem, id scelerisque lectus cursus in',
        content: {
            columns: [
                {
                    title: 'Product title 1',
                    image: svg,
                    cta: columnCtaButton,
                },
                {
                    title: 'Product title 2',
                    image: svg,
                    cta: columnCtaLink,
                },
                {
                    title: 'Product title 3',
                    image: svg,
                    cta: columnCtaButton,
                },
            ],
            rows: [
                {
                    label: 'Great Feature One',
                    tooltip: {
                        label: '',
                        icon: 'info',
                        description: 'Celery quandong swiss chard chicory earthnut pea potato.',
                    },
                    cells: [
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                    ],
                },
                {
                    label: 'Fantastic Feature Two',
                    cells: [
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                    ],
                },
                {
                    label: 'Feature Three',
                    tooltip: {
                        label: '',
                        icon: 'info',
                        description: 'Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori.',
                    },
                    cells: [
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                    ],
                },
                {
                    label: 'Feature Four',
                    tooltip: {
                        label: '',
                        icon: 'info',
                        description: 'Celery quandong swiss chard chicory earthnut pea potato.',
                    },
                    cells: [
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                    ],
                },
                {
                    label: 'Feature Five',
                    cells: [
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                    ],
                },
            ],
        },
        ctas: {
            type: 'Ctas',
            ctas: [
                {
                    type: 'ContentLink',
                    label: 'Read more',
                    url: '/en/quote',
                },
            ],
        },
    },
    default: {
        title: 'Lorem ipsum dolor sit amet consectetur',
        subtitle: 'Donec pulvinar arcu lorem, id scelerisque lectus cursus in',
        content: {
            columns: [
                {
                    title: 'Product title 1',
                    image: svg,
                    cta: columnCtaButton,
                },
                {
                    title: 'Product title 2',
                    image: svg,
                    cta: columnCtaLink,
                },
                {
                    title: 'Product title 3',
                    image: svg,
                    cta: columnCtaButton,
                },
                {
                    title: 'Product title 4',
                    image: svg,
                    cta: columnCtaButton,
                },
                {
                    title: 'Product title 5',
                    image: svg,
                    cta: columnCtaButton,
                },
            ],
            rows: [
                {
                    label: 'Great Feature One',
                    tooltip: {
                        label: '',
                        icon: 'info',
                        description: 'Celery quandong swiss chard chicory earthnut pea potato.',
                    },
                    cells: [
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                    ],
                },
                {
                    label: 'Fantastic Feature Two',
                    cells: [
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                    ],
                },
                {
                    label: 'Feature Three',
                    tooltip: {
                        label: '',
                        icon: 'info',
                        description: 'Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori.',
                    },
                    cells: [
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                    ],
                },
                {
                    label: 'Feature Four',
                    tooltip: {
                        label: '',
                        icon: 'info',
                        description: 'Celery quandong swiss chard chicory earthnut pea potato.',
                    },
                    cells: [
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                    ],
                },
                {
                    label: 'Feature Five',
                    cells: [
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: false,
                            label: 'unsupported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                        {
                            checked: true,
                            label: 'supported',
                        },
                    ],
                },
            ],
        },
        ctas: {
            type: 'Ctas',
            ctas: [
                {
                    type: 'ContentLink',
                    label: 'Read more',
                    url: '/en/quote',
                },
            ],
        },
    },
};
