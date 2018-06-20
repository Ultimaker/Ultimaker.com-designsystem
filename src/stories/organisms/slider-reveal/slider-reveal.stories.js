import {storiesOf} from '@storybook/vue';
// import {withKnobs, text, object} from '@storybook/addon-knobs';
import data from './slider-reveal.stories.json';

storiesOf('organisms|slider-reveal', module)
    // .addDecorator(withKnobs)
    .add('Slider reveal', () => {
        // Remark: slider-reveal doesn't initialize properly when
        // using knobs.
        //
        // const title = text('Title', data.title),
        //     contents = object('Contents', data.contents),
        //     imageSlider = object('Images', data.imageSlider),
        //     link = object('Link', data.link);

        return {
            data: () => ({
                slider: {
                    title: data.title,
                    contents: data.contents,
                    imageSlider: data.imageSlider,
                    link: data.link
                }
            }),
            template: require('./slider-reveal.stories.html')
        };
    });
