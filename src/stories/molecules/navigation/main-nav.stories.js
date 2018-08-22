import {storiesOf} from '@storybook/vue';

import mainNavData from './main-nav.stories.data.js';

storiesOf('Molecules|navigation', module)
    .add(
        'Main navigation',
        () => ({
            template: require('./main-nav.stories.html'),
            data: () => ({
                mainNavData: {
                    ...mainNavData,
                    mainNavOpen: true
                }
            })
        }),
        {
            notes: {markdown: require('./main-nav.stories.md')}
        }
    );
