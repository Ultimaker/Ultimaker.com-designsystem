import {storiesOf} from '@storybook/vue';

storiesOf('global', module)
    .add(
        'Welcome',
        () => ({
            template: `<div><h2>Welcome</h2></div>`
        })
    );
