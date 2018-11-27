import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import knobs from './ecosystem.knobs.stories.js';
import {contentLinkPresent} from '../../helpers/contentLink';

storiesOf('organisms|ecosystem', module)
    .addDecorator(withKnobs)
    .add('Ecosystem', () => ({
        data: () => {
            const data = knobs();

            return {
                ecosystem: {
                    ... data.ecosystem,
                    items: data.ecosystem.items.map((item)=> ({
                        ... item,
                        contentLink: contentLinkPresent(item.contentLink)
                    }))
                }
            };
        },
        template: require('./ecosystem.stories.html')
    }),
    {
        notes: {markdown: require('./ecosystem.stories.md')}
    });
