import { storiesOf } from '@storybook/vue';

storiesOf('Atoms|media', module)
    .add(
        'Youtube Video',
        () => ({
            data: () => ({
                videoId: 'w5Fgp-KihIA',
            }),
            template: require('./youtube-video.stories.html'),
        }),
        {
            notes: { markdown: require('./youtube-video.stories.md') },
        },

    );
