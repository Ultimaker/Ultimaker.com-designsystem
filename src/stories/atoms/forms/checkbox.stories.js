import {storiesOf} from '@storybook/vue';
import {withKnobs, boolean} from '@storybook/addon-knobs';

storiesOf('Atoms|forms', module)
    .addDecorator(withKnobs)
    .add(
        'Checkbox',
        () => {
            const disabled = boolean('Disabled', false);

            return {
                data: () => ({
                    name: 'checkbox',
                    disabled: disabled,
                    value: true
                }),
                inject: ['data'],
                template: require('./checkbox.stories.html')
            };
        },
        {
            notes: {markdown: require('./checkbox.stories.md')}
        }
    );
