import { storiesOf } from '@storybook/vue';

storiesOf('global', module)
    .add(
        'Welcome',
        () => ({
            template: '<div><h1>User Interface Patterns</h1><h2>Designed for Ultimaker.com</h2><p class="copy--intro">The patterns designed within this library are composed using the <a href="http://atomicdesign.bradfrost.com">Atomic Design</a> System principles created by Brad Frost.</p></div>',
        }),
    );
