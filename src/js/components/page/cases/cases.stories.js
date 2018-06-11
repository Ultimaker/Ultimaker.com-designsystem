import { storiesOf } from '@storybook/vue';
import { withKnobs, text, object} from '@storybook/addon-knobs';
import data from './cases.data';

storiesOf('organisms|cases', module)
    .addDecorator(withKnobs)
    .add('Cases', () => {
		const title = text('Title', data.title),
            description = text('Description', data.description),
			buttonIcon= text('Button icon', data.buttonIcon),
            buttonLabel = text('Button label', data.buttonLabel),
            image = object('Image', data.image);

        return {
			data: () => ({
				cases: {
					title,
					description,
					buttonIcon,
					buttonLabel,
                    image
                }
			}),
            template: `<cases v-bind="cases"></cases>`
        }
});