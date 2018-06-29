import {storiesOf} from '@storybook/vue';
import {withKnobs, select, text, object} from '@storybook/addon-knobs';
import data from './slider-reveal.stories.json';

storiesOf('organisms|slider-reveal', module)
    .addDecorator(withKnobs)
    .add('Slider reveal', () => {
        // Remark: slider-reveal doesn't initialize properly when
        // using knobs.
        //
        const modifier = select('Modifier', data.modifiers.map((b) => b.title), data.defaultModifier),
            selectedModifier = data.modifiers.find((m) => m.title === modifier),
            title = text('Title', data.title),
            contents = object('Contents', data.contents),
            imageSlider = object('Images', data.imageSlider),
            link = object('Link', data.link);

        return {
            data: () => ({
                slider: {
                    title: data.title,
                    contents: data.contents,
                    imageSlider: data.imageSlider,
                    link: data.link
                },
                modifier: selectedModifier.modifierClass
            }),
            template: require('./slider-reveal.stories.html')
        };
    });
