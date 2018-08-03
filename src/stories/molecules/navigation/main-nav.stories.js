import {storiesOf} from '@storybook/vue';
import storyRouter from 'storybook-vue-router';
import mainNavData from './main-nav.stories.data.js';

storiesOf('Molecules|navigation', module)
    .addDecorator(storyRouter())
    .add(
        'Main navigation',
        () => ({
            template: require('./main-nav.stories.html'),
            data: () => ({
                mainNavData
            })
        }),
        {
            notes: {markdown: require('./main-nav.stories.md')}
        }
    );
