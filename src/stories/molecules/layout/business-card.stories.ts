import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import knobs from './business-card.knobs.stories';

storiesOf('Molecules|layout/cards', module)
    .addDecorator(withKnobs)
    .add('Business Card', () => ({
        data: () =>  knobs(),
        template: require('./business-card.stories.html')
    }),
    {
        notes: {markdown: require('./business-card.stories.md')}
    });
