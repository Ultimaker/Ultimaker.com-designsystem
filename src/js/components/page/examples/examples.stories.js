import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs/vue';
import data from './examples.data';

storiesOf('organisms|examples', module)
	.addDecorator(withKnobs)
	.add('Examples', () => {
		const title = text('Title', data.title),
			tablist = object('Tablist', data.tablist),
			cards = object('Cards', data.cards),
			callToAction = text('Text', data.callToAction.contentLink.text);

		return {
			data: () => ({
				examples: {
					title,
					cards,
                    tablist
				}
			}),
			template: `<examples :title="examples.title" :horizontal-list="examples.tablist" :cards="examples.cards"></examples>`
		}
	});