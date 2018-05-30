import { storiesOf } from '@storybook/vue';
import { withKnobs, text, object} from '@storybook/addon-knobs/vue';
import data from './ecosystem.data';

storiesOf('organisms|ecosystem', module)
    .addDecorator(withKnobs)
    .add('Ecosystem', () => {
        const title = text('Title', data.title),
		items = object('Items', data.items);

        return {
            data: () => ({
                ecosystem: {
					title,
                    items
				}
            }),
            template: `<ecosystem v-bind="ecosystem"></ecosystem>`
        }
});