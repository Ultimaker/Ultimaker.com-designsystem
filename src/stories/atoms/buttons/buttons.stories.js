import {storiesOf} from '@storybook/vue';
import {withKnobs, select} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import data from './buttons.stories.json';

storiesOf('Atoms|buttons', module)
    .addDecorator(withKnobs)
    .add(
        'Button',
        () => {
            const modifier = select('Modifier', data.buttonModifiers.map((b) => b.title), data.defaultButtonModifier),
                selectedModifier = data.buttonModifiers.find((m) => m.title === modifier);

            return {
                data: () => ({
                    modifier: selectedModifier.modifier
                }),
                inject: ['data'],
                template: require('./button.stories.html')
            };
        },
        {
            notes: {markdown: require('./button.stories.md')}
        }
    )
    .add(
        'Icon button',
        () => {
            const modifier = select('Modifier', data.iconButtonModifiers.map((b) => b.title), data.defaultIconButtonModifier),
                selectedModifier = data.iconButtonModifiers.find((m) => m.title === modifier);

            return {
                data: () => ({
                    modifier: selectedModifier.modifier,
                    showLabel: selectedModifier.showLabel
                }),
                inject: ['data'],
                template: require('./icon-button.stories.html')
            };
        },
        {
            notes: {markdown: require('./icon-button.stories.md')}
        }
    )
    .add(
        'Content toggle',
        () => {
            return {
                methods: {
                    toggle: action('toggle')
                },
                inject: ['data'],
                template: require('./content-toggle.html')
            };
        },
        {
            notes: {markdown: require('./content-toggle.md')}
        }
    );
