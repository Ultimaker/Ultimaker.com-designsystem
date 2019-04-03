import {storiesOf} from '@storybook/vue';
import data from 'molecules/card-product/stories/data.json';

storiesOf('Molecules|layout/cards/card product', module)
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
                        data: data.noProperties
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
                        data: data.noImage
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
                        data: data.noImageOrProperties
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
