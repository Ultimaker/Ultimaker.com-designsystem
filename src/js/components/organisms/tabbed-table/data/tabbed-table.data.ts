export const data = {
    default: {
        title: 'Title',
        subtitle: 'Subtitle',
        tabs: [
            {
                type: 'TabTable',
                label: 'Item one',
                rows: [
                    {
                        type: 'TabTableRow',
                        label: 'Label row one',
                        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ex sed magna blandit tempor. Fusce orci turpis, vehicula bibendum ullamcorper eget, accumsan quis mi. ',
                        tooltip: {
                            type: 'Tooltip',
                            label: 'Label tooltip',
                            icon: 'info',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar ullamcorper metus, at cursus elit viverra eu.',
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
                    {
                        type: 'TabTableRow',
                        label: 'Label row two',
                    },
                ],
            },
            {
                type: 'TabTable',
                label: 'Item two',
                rows: [
                    {
                        type: 'TabTableRow',
                        label: 'Label row one',
                        value: 'Value row one',
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
                    {
                        type: 'TabTableRow',
                        label: 'Label row one',
                        value: 'Im a value',
                    },
                ],
            },
        ],
        ctas: {
            type: 'CtaBlock',
            ctas: [
                {
                    type: 'ContentButton',
                    label: 'Content button label',
                    url: '#',
                    clickEvent: {
                        type: 'AnalyticalEvent',
                        ctaLabel: 'Content link label',
                        ctaUrl: '#',
                        ctaType: 'ContentLink',
                    },
                },
            ],
        },
    },
};
