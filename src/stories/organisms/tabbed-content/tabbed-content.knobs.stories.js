import { text } from '@storybook/addon-knobs';
import data from './tabbed-content.stories.json';

export default () => ({
    ...data,
    TabbedContent: {
        ...data.TabbedContent,
        title: text('Tabbed-content - title', data.TabbedContent.title),
        subtitle: text('Tabbed-content - subtitle', data.TabbedContent.subtitle),
        tabs: data.TabbedContent.tabs.map((tab, i) => ({
            ...tab,
            label: text(`Tab ${i + 1} - label`, tab.label),
            content: {
                ...tab.content,
                title: text(`Tab ${i} - content title`, tab.content.title),
                description: text(`Tab ${i + 1} - content description`, tab.content.description),
                ctas: {
                    ...tab.content.cta,
                    label: text(`Tab ${i + 1} - cta label`, tab.content.cta.label),
                },
            },
        })),
    },
});
