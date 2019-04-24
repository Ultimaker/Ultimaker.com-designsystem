import {storiesOf} from '@storybook/vue';
import blockIconDefault from 'molecules/block-icon/data/examples/block-icon-default';

storiesOf('Molecules|block-icon/block-icon', module)
    .add('default',
        () => {
            return {
                data: () => {
                    return {
                        data: blockIconDefault
                    };
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    );
