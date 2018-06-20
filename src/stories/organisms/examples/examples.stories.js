import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import data from './examples.stories.json';

storiesOf('organisms|examples', module)
    .addDecorator(withKnobs)
    .add(
        'Examples',
        () => {
            const title = text('Title', data.title),
                horizontalList = object('Horizontal List', data.horizontalList),
                cards = object('Cards', data.cards);

            return {
                data: () => ({
                    examples: {
                        title,
                        cards,
                        horizontalList
                    }
                }),
                template: require('./examples.stories.html')
            };
        },
        {
            notes: {markdown: require('./examples.stories.md')}
        }
    );
