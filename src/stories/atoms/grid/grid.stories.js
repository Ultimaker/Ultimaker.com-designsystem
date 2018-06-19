import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object, select, boolean} from '@storybook/addon-knobs';
import data from './grid.stories.json';

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
            notes: {markdown: require('./grid.stories.md')}
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
            notes: {markdown: require('./grid.justification.stories.md')}
        }
    );
