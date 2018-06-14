import {storiesOf} from '@storybook/vue';

storiesOf('Atoms|lists', module)
    .add(
        'Tabbable Definition list',
        () => ({
            data: () => ({
                activeIndex: 0
            }),
            methods: {
                indexChanged({index}) {
                    this.activeIndex = index;
                }
            },
            inject: ['data'],
            template: require('./tabbable-definition-list.stories.html')
        }),
        {
            notes: {markdown: require('./tabbable-definition-list.stories.md')}
        }
    );
