export const data = {
    default: {
        type: 'TabTableRow',
        label: 'Label row one',
        value: 'Value row one',
        tooltip: {
            type: 'Tooltip',
            label: 'Label tooltip',
            icon: 'info',
            description: 'Tooltip description',
        },
        linkList: [
            {
                type: 'ContentLink',
                label: 'Content link label',
                url: '#',
                icon: 'info',
                clickEvent: {
                    type: 'AnalyticalEvent',
                    ctaLabel: 'Content link label',
                    ctaUrl: '#',
                    ctaType: 'ContentLink',
                },
            },
        ],
    },
};
