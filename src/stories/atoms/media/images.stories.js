import {storiesOf} from '@storybook/vue';
import {withKnobs, select} from '@storybook/addon-knobs';
import data from './images.stories.json';

storiesOf('Atoms|media', module)
    .addDecorator(withKnobs)
    .add(
        'Images',
        () => {
            const ratio = select('Aspect ratio', data.aspectRatios.map(s => s.title), data.defaultAspectRatio),
                currentRatio = data.aspectRatios.find(a => a.title === ratio);

            return {
                data: () => ({
                    image: currentRatio.image
                }),
                template: require('./images.stories.html')
            };
        },
        {
            notes: {markdown: require('./images.stories.md')}
        }
    );
