import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import knobs from './sys-nav.knobs.stories';

/* tslint-ignore */
storiesOf('Molecules|sys-nav', module)
    .addDecorator(withKnobs)
    .add('SysNav', () => (
        {
            data: () => knobs(),
            methods: {
                openSearch: action('openSearch')
            },
            template: require('./sys-nav.stories.html'),
        }), {
             notes: {markdown: require('./sys-nav.stories.md')},
         });
