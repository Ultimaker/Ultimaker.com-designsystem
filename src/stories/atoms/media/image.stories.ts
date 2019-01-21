import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import data from './image.stories.json';

storiesOf('Atoms|media', module)
    .addDecorator(withKnobs)
    .add(
        'Image',
        () => {
            // const ratio = select('Aspect ratio', data.aspectRatios.map(s => s.title), data.defaultAspectRatio),
            //     currentRatio = data.aspectRatios.find(a => a.title === ratio);

            const props = {
                imageSrc: data.imageSrc,
                description: data.description,
                quality: data.quality,
                radius: data.radius,
                imageFormat: data.imageFormat,
                resizeBehavior: data.resizeBehavior,
                forcusArea: data.focusArea,
                backgroundColor: data.backgroundColor
            };

            return {
                data: () => ({
                    props
                }),
                template: require('./image.stories.html')
            };
        },
        {
            notes: {markdown: require('./image.stories.md')}
        }
    );
