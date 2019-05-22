import { text } from '@storybook/addon-knobs';
import data from './tabbed-sequence.stories.json';

export default () => ({
    ...data,
    TabbedSequence: {
        ...data.TabbedSequence,
        title: text('Tabbed-sequence - title', data.TabbedSequence.title),
        subtitle: text('Tabbed-sequence - subtitle', data.TabbedSequence.subtitle),
        tabs: data.TabbedSequence.tabs.map((tab, i) => ({
            ...tab,
            label: text(`Tab ${i + 1} - label`, tab.label),
            content: {
                ...tab.content,
                title: text(`Tab ${i} - content title`, tab.content.title),
                description: text(`Tab ${i + 1} - content description`, tab.content.description),
                ctas: tab.content.cta ? {
                    ...tab.content.cta,
                    label: text(`Tab ${i + 1} - cta label`, tab.content.cta.label),
                } : {},
            },
        })),
    },
});
