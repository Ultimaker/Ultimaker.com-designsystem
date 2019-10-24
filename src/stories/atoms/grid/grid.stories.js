import { storiesOf } from '@storybook/vue';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import data from './grid.stories.json';

storiesOf('Atoms|grid', module)
    .addDecorator(withKnobs)
    .add(
        'Breakpoints',
        () => {
            const active = select('Breakpoint', data.breakpoints.map(b => b.title), data.defaultBreakpoint);

            return {
                data: () => ({
                    breakpoints: data.breakpoints,
                    columns: data.columns,
                }),
                props: {
                    active: { default: active },
                    gutters: { default: boolean('Gutters', false) },
                },
                template: require('./grid.stories.html'),
            };
        },
        {
            notes: { markdown: require('./grid.stories.md') },
        },
    );
