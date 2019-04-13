import {storiesOf} from '@storybook/vue';
import {withKnobs} from '@storybook/addon-knobs';
import getKnobs from 'atoms/li-item/data/data.knobs';
import cardProductDefault from 'molecules/card-product/data/examples/card-product-default';

storiesOf('Atoms|list items/li-item', module)
    .addDecorator(withKnobs)
    .add('text',
        () => {
            const knobs = getKnobs();

            return {
                props: {
                    item: {
                        default: knobs.item
                    }
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    )
    .add('span-label',
        () => {
            return {
                props: {
                    item: {
                        default: getKnobs(true)
                    }
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    )
    .add('card-product',
        () => {
            return {
                props: {
                    item: {
                        default: () => {
                            return {
                                item: cardProductDefault,
                                type: cardProductDefault.type
                            };
                        }
                    }
                },
                template: require('./template.html')
            };
        },
        {
            notes: require('./notes.md')
        }
    );
