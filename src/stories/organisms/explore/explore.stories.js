import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';
import data from './explore.data';

storiesOf('organisms|explore', module)
    .addDecorator(withKnobs)
    .add('Explore', () => {
        const title = text('Title', data.title),
            items = object('Items', data.items);

        return {
            data: () => ({
                explore: {
                    title,
                    items
                }
            }),
            template: `<explore v-bind="explore"></explore>`
        };
    });
