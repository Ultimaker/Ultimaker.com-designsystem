import { data as imageData } from 'components/atoms/c-image/data/c-image.data';

const columnCta = {
    type: 'ContentButton',
    label: 'Get a quote',
    url: '/en/quote',
};

export const data = {
    default: {
        title: 'Lorem ipsum dolor sit amet consectetur',
        subtitle: 'Donec pulvinar arcu lorem, id scelerisque lectus cursus in',
        content: {
            columns: [
                {
                    title: 'Printer One',
                    image: imageData.default,
                    cta: columnCta,
                },
                {
                    title: 'Printer Two',
                    image: imageData.default,
                    cta: columnCta,
                },
                {
                    title: 'Printer Three',
                    image: imageData.default,
                    cta: columnCta,
                },
            ],
            rows: [
                {
                    label: 'Feature One',
                    tooltip: {
                        label: '',
                        icon: 'info',
                        description: 'Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori.',
                    },
                    cells: [
                        {
                            checked: false,
                            label: '',
                        },
                        {
                            checked: true,
                            label: '',
                        },
                        {
                            checked: true,
                            label: '',
                        },
                    ],
                },
                {
                    label: 'Feature Two',
                    tooltip: {
                        label: '',
                        icon: 'info',
                        description: 'Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori.',
                    },
                    cells: [
                        {
                            checked: true,
                            label: '',
                        },
                        {
                            checked: true,
                            label: '',
                        },
                        {
                            checked: true,
                            label: '',
                        },
                    ],
                },
                {
                    label: 'Feature Three',
                    tooltip: {
                        label: '',
                        icon: 'info',
                        description: 'Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori.',
                    },
                    cells: [
                        {
                            checked: true,
                            label: '',
                        },
                        {
                            checked: true,
                            label: '',
                        },
                        {
                            checked: false,
                            label: '',
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
