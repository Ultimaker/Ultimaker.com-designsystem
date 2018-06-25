import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import Explore from 'organisms-page/explore';
import data from './explore.stories.json';

storiesOf('organisms|explore', module)
    .addDecorator(withKnobs)
    .add(
        'Explore', () => {
            const title = text('Title', data.title),
                items = object('Items', data.items);

            return {
                components: {
                    Explore
                },
                data: () => ({
                    explore: {
                        title,
                        items
                    }
                }),
                template: require('./explore.stories.html')
            };
        },
        {
            notes: {markdown: require('./explore.stories.md')}
        }
    );
