import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import Examples from 'organisms-page/examples';
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
                components: {
                    Examples
                },
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
