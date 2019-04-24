import {storiesOf} from '@storybook/vue';
import overviewUBRData from 'organisms-page/overview-ubr/data/examples/overview-ubr-default';

storiesOf('organisms|overview-ubr', module)
    .add('Overview Unique buying reasons',
        () => {
            return {
                data: () => {
                    return {
                        data: overviewUBRData
                    };
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    );
