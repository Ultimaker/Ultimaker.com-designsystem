import { storiesOf } from '@storybook/vue';
import notes from './fonts.stories.md';
import template from './template.html';

storiesOf('global', module)
    .add(
        'Fonts',
        () => ({
            template,
        }),
        {
            notes: { markdown: notes },
        },
    );
