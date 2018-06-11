import { storiesOf } from '@storybook/vue';
import { withKnobs, text, object} from '@storybook/addon-knobs';
import data from './slider-reveal.data';

storiesOf('organisms|slider-reveal', module)
    .addDecorator(withKnobs)
    .add('Slider reveal', () => {
        const title = text('Title', data.title),
			contents = text('Contents', data.contents),
			imageSlider = object('Images', data.imageSlider.images);

        return {
            data: () => ({
                slider: {
					title,
                    contents,
					imageSlider
				}
            }),
            template: `<slider-reveal v-bind="slider"></slider-reveal>`
        }
});