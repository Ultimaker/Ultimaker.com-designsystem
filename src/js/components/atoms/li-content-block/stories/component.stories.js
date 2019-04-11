import {storiesOf} from '@storybook/vue';
import data from './data/data';

storiesOf('Atoms|list items', module)
    .add('li-content-block',
        () => {
            return {
                data: () => {
                    return {
                        data: data
                    };
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    );
