import {storiesOf} from '@storybook/vue';
import Pager from 'molecules/pager';

storiesOf('Molecules|navigation', module)
    .add(
        'Pager',
        () => {
            return {
                components: {
                    Pager
                },
                data: () => ({
                    pages: 10,
                    activePage: 4
                }),
                methods: {
                    indexChanged({index}) {
                        this.activePage = index;
                    }
                },
                template: require('./pager.stories.html')
            };
        },
        {
            notes: {markdown: require('./pager.stories.md')}
        }
    );
