import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './subnavigation.stories.knobs';

storiesOf('organisms|subnavigation', module)
    .addDecorator(withKnobs)
    .add('Subnavigation', () => ({
        data: () => knobs(),
        template: require('./subnavigation.stories.html'),
    }),
        { notes:  require('./subnavigation.stories.md') },
    );
