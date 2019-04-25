import {storiesOf} from '@storybook/vue';
import overviewUBRData from 'organisms-page/overview-ubr/data/overview-ubr.data';

storiesOf('organisms|overview-ubr', module)
    .add('Overview Unique buying reasons',
        () => {
            return {
                data: () => {
                    return {
                        data: overviewUBRData
                    };
                },
                template: require('./overview-ubr.html')
            };
        },
        {
            notes: require('./overview-ubr.md')
        }
    );
