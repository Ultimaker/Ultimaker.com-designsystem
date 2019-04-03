import {storiesOf} from '@storybook/vue';
import data from './data.json';

storiesOf('Molecules|layout/lists/list-unordered', module)
    .add('li-content-block',
        () => {
            return {
                data: () => {
                    return {
                        data: data['li-content-block']
                    };
                },
                template: require('./template.html')
            };
        },
        {
            notes: {
                markdown: require('./notes.md')
            }
        }
    )
    .add('li-inline-label',
        () => {
            return {
                data: () => {
                    return {
                        data: data['li-inline-label']
                    };
                },
                template: require('./template.html')
            };
        },
        {
            notes: {
                markdown: require('./notes.md')
            }
        }
    )
    .add('li-item',
        () => {
            return {
                data: () => {
                    return {
                        data: data['li-item']
                    };
                },
                template: require('./template.html')
            };
        },
        {
            notes: {
                markdown: require('./notes.md')
            }
        }
    );
