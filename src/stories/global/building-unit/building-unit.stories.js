import {storiesOf} from '@storybook/vue';
import notes from './building-unit.stories.md';

storiesOf('global', module)
    .add(
        'Building units',
        () => ({
            template: `<div class="demo-building-unit">
                <div class="building-unit building-unit--vertical"></div>
                <div class="building-unit building-unit--vertical"></div>
                <div class="building-unit building-unit--vertical"></div>
                <div class="building-unit building-unit--vertical building-unit--hidden-sm"></div>
                <div class="building-unit building-unit--half building-unit--vertical building-unit--hidden-md"></div>
                <button class="button--secondary">Example pattern</button>
            </div>`
        }),
        {
            notes: {markdown: notes}
        }
    );
