import {storiesOf} from '@storybook/vue';
import notes from './grid.stories.md';
import notesJustification from './grid.justification.stories.md';
import data from './grid.stories.json';
import {withKnobs, text, object, select, boolean} from '@storybook/addon-knobs';

storiesOf('Atoms|grid', module)
    .addDecorator(withKnobs)
    .add(
        'Breakpoints',
        () => {
            const active = select('Breakpoint', data.breakpoints.map((b) => b.title), data.defaultBreakpoint),
                gutters = boolean('Gutters', false);

            return {
                data: () => ({
                    active: active,
                    gutters: gutters,
                    breakpoints: data.breakpoints,
                    columns: data.columns
                }),
                template: require('./grid.stories.html')
            };
        },
        {
            notes: {markdown: notes}
        }
    )
    .add(
        'Justification',
        () => {
            return {
                data: () => ({
                    justifications: data.justifications
                }),
                template: require('./grid.justification.stories.html')
            };
        },
        {
            notes: {markdown: notesJustification}
        }
    );
