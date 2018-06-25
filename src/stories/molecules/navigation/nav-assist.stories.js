import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import NavAssist from 'atoms/nav-assist';

storiesOf('Molecules|navigation', module)
    .add(
        'Nav assist',
        () => {
            return {
                components: {
                    NavAssist
                },
                data: () => ({
                    isOpen: false
                }),
                methods: {
                    toggle() {
                        action('toggle')();
                        this.isOpen = !this.isOpen;
                    },
                    used() {
                        action('used')();
                    }
                },
                template: require('./nav-assist.stories.html')
            };
        },
        {
            notes: {markdown: require('./nav-assist.stories.md')}
        }
    );
