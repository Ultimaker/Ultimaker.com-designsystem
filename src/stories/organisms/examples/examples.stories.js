import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './examples.knobs.stories.js';
import {contentLinkPresent} from '../../helpers/contentLink';

storiesOf('organisms|examples', module)
    .addDecorator(withKnobs)
    .add('Examples', () => ({
        data: () => {
            const data = knobs();

            return {
                examples: {
                    ... data.examples,
                    cards: data.examples.cards.map((item)=> ({
                        ... item,
                        contentLink: contentLinkPresent(item.contentLink)
                    }))
                }
            };
        },
        template: require('./examples.stories.html')
    }),
    {
        notes: {markdown: require('./examples.stories.md')}
    });
