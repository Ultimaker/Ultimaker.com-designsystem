import {storiesOf} from '@storybook/vue';

storiesOf('Molecules|layout/cards', module)
    .add(
        'Reseller card',
        () => {
            return {
                template: require('./reseller-card.stories.html')
            };
        }
    );
