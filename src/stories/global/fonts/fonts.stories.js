import {storiesOf} from '@storybook/vue';
import notes from './fonts.stories.md';

storiesOf('global', module)
    .add(
        'Fonts',
        () => ({
            template: `<div>
                <p style="font-family: 'univers'">Primary font: "univers", Arial, "Helvetica Neue", Helvetica, sans-serif;</p>
                <p style="font-family: 'fugue'">Secondary font: "fugue", Arial, "Helvetica Neue", Helvetica, sans-serif;</p>
            </div>`
        }),
        {
            notes: {markdown: notes}
        }
    );
