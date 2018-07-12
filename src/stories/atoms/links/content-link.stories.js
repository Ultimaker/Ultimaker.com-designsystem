import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object, select, boolean} from '@storybook/addon-knobs';
import data from './content-link.stories.json';

storiesOf('Atoms|links',  module)
    .addDecorator(withKnobs)
    .add(
        'Content link',
        () => {
            const size = select('Size', data.sizes.map(s => s.title), data.defaultSize),
                reversed = boolean('Reversed'),
                icon = boolean('Icon'),
                selectedSize = data.sizes.find(s => s.title === size),
                mod = `${selectedSize.modifier} ${reversed ? 'reversed' : ''}`.trim();

            return {
                inject: ['data'],
                data: () => ({
                    mod: mod,
                    icon: icon ? data.defaultIcon : undefined
                }),
                template: require('./content-link.stories.html')
            };
        },
        {
            notes: {markdown: require('./content-link.stories.md')}
        }
    );
