import {storiesOf} from '@storybook/vue';
import {withKnobs, text} from '@storybook/addon-knobs';

storiesOf('Molecules|helpers', module)
    .addDecorator(withKnobs)
    .add(
        'Tooltip',
        () => {
            const copy = text('Text', 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus.');

            return {
                data: () => ({
                    copy: copy
                }),
                template: require('./tooltip.stories.html')
            };
        },
        {
            notes: {markdown: require('./tooltip.stories.md')}
        }
    );
