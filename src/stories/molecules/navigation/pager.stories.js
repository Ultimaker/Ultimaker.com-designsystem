import { storiesOf } from '@storybook/vue';

storiesOf('Molecules|navigation', module)
    .add(
        'Pager',
        () => ({
            data: () => ({
                pages: 10,
                activePage: 4,
            }),
            methods: {
                indexChanged({ index }) {
                    this.activePage = index;
                },
            },
            template: require('./pager.stories.html'),
        }),
        {
            notes: { markdown: require('./pager.stories.md') },
        },
    );
