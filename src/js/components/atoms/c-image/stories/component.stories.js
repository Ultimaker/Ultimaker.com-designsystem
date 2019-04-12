import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import getDefaultKnobs from '../data/default.knobs';
import getMinKnobs from '../data/min.knobs';

storiesOf('Atoms|media/contentful image', module)
    .addDecorator(withKnobs)
    .add(
        'default',
        () => {
            // const ratio = select('Aspect ratio', data.aspectRatios.map(s => s.title), data.defaultAspectRatio),
            //     currentRatio = data.aspectRatios.find(a => a.title === ratio);
            const knobs = getDefaultKnobs();

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

                template: require('./template.default.html')
            };
        },
        {
            notes: require('./notes.md')
        },
    )
    .add(
        'minimum',
        () => {
            const knobs = getMinKnobs();

            return {
                props: {
                    alt: {
                        default: knobs.alt
                    },
                    mimeType: {
                        default: knobs.mimeType
                    },
                    title: {
                        default: knobs.title
                    },
                    url: {
                        default: knobs.url
                    }
                },

                template: require('./template.min.html')
            };
        }
    );
