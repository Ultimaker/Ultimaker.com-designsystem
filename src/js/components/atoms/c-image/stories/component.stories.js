import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import getKnobs from '../data/data.knobs';

storiesOf('Atoms|media', module)
    .addDecorator(withKnobs)
    .add(
        'Contentful Image',
        () => {
            // const ratio = select('Aspect ratio', data.aspectRatios.map(s => s.title), data.defaultAspectRatio),
            //     currentRatio = data.aspectRatios.find(a => a.title === ratio);
            const knobs = getKnobs();

            return {
                props: {
                    alt: {
                        default: knobs.alt
                    },
                    backgroundColor: {
                        default: knobs.backgroundColor
                    },
                    imageFormat: {
                        default: knobs.imageFormat
                    },
                    focusArea: {
                        default: knobs.focusArea
                    },
                    mimeType: {
                        default: knobs.mimeType
                    },
                    quality: {
                        default: knobs.quality
                    },
                    radius: {
                        default: knobs.radius
                    },
                    resizeBehavior: {
                        default: knobs.resizeBehavior
                    },
                    title: {
                        default: knobs.title
                    },
                    url: {
                        default: knobs.url
                    }
                },

                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        },
    );
