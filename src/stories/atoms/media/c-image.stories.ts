import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import data from './c-image.stories.json';

storiesOf('Atoms|media', module)
    .addDecorator(withKnobs)
    .add(
        'Contentful Image',
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
                focusArea: data.focusArea,
                backgroundColor: data.backgroundColor,
            };

            return {
                data: () => ({
                    props,
                }),
                template: require('./c-image.stories.html'),
            };
        },
        { notes: { markdown: require('./c-image.stories.md') } },
    );
