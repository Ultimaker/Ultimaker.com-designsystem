import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './card.knobs.stories.js';
import {contentLinkPresent} from '../../helpers/contentLink';

storiesOf('Molecules|layout/cards', module)
    .addDecorator(withKnobs)
    .add('Card', () => ({
        data: () => {
            const data = knobs();

            return {
                card: {
                    ... data.card,
                    contentLink: contentLinkPresent(data.card.contentLink)
                }
            };
        },
        template: require('./card.stories.html')
    }),
    {
        notes: {markdown: require('./card.stories.md')}
    });
