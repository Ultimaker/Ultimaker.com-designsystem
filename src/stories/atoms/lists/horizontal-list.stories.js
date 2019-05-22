import { storiesOf } from '@storybook/vue';
import data from './horizontal-list.stories.json';

storiesOf('Atoms|lists', module)
    .add(
        'Horizontal list',
        () => ({
            data: () => ({
                list: data,
            }),
            template: require('./horizontal-list.stories.html'),
        }),
        {
            notes: { markdown: require('./horizontal-list.stories.md') },
        },
    );
