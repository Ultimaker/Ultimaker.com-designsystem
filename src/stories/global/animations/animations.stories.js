import {storiesOf} from '@storybook/vue';
import notes from './animations.stories.md';

storiesOf('global', module)
    .add(
        'Animations',
        () => ({
            template: `<div class="demo-panel demo-panel--micro-animate">
                <p class="demo-panel__label demo-panel__label--centered">Hover over me</p>
                <div class="demo-panel__animate-me"></div>
            </div>`
        }),
        {
            notes: {markdown: notes}
        }
    );
