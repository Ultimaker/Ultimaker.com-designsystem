import {storiesOf} from '@storybook/vue';
import data from './data.json';

storiesOf('Molecules|layout/cards/card-product', module)
    .add('default',
        () => {
            return {
                data: () => {
                    return {
                        data: data.default
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
    .add('no properties',
        () => {
            return {
                data: () => {
                    return {
                        data: data['no-properties']
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
    .add('no image',
        () => {
            return {
                data: () => {
                    return {
                        data: data['no-image']
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
    .add('no image or properties',
        () => {
            return {
                data: () => {
                    return {
                        data: data['no-image-or-properties']
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
