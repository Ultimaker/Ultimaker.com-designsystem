import { storiesOf } from '@storybook/vue';
import overviewUBRData from '../data/overview-ubr.data';
import addNotes from 'src/stories/helpers/add-notes';

storiesOf('organisms|overview-ubr', module)
    .add(
        'Overview Unique buying reasons - 2 blocks',
        () => ({
            data: () => ({
                data: overviewUBRData(2),
            }),
            template: require('./overview-ubr.html'),
        }),
        addNotes(require('./overview-ubr.md')),
    )
    .add(
        'Overview Unique buying reasons - 3 blocks',
        () => ({
            data: () => ({
                data: overviewUBRData(3),
            }),
            template: require('./overview-ubr.html'),
        }),
        addNotes(require('./overview-ubr.md')),
    )
    .add('Overview Unique buying reasons - 4 blocks',
        () => ({
            data: () => ({
                data: overviewUBRData(4),
            }),
            template: require('./overview-ubr.html'),
        }),
        addNotes(require('./overview-ubr.md')))
    .add('Overview Unique buying reasons - 5 blocks',
        () => ({
            data: () => ({
                data: overviewUBRData(5),
            }),
            template: require('./overview-ubr.html'),
        }),
        addNotes(require('./overview-ubr.md')))
    .add('Overview Unique buying reasons - 6 blocks',
        () => ({
            data: () => ({
                data: overviewUBRData(6),
            }),
            template: require('./overview-ubr.html'),
        }),
        addNotes(require('./overview-ubr.md')));
