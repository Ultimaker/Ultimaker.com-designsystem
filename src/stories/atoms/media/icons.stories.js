import {storiesOf} from '@storybook/vue';
import {withKnobs, text} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms|media', module)
    .addDecorator(withKnobs)
    .add(
        'Icon',
        () => {
            return {
                data: () => ({
                    iconName: text('Icon name', 'menu')
                }),
                template: require('./icons.stories.html')
            };
        },
        {
            notes: {markdown: require('./icons.stories.md')}
        }
    );

const iconTypes = [
    {
        title: 'Brand',
        iconData: 'brandIcons',
        iconModifierPrefix: 'brand',
        markdown: require('./brand-icons.stories.md'),
        template: require('./multiple-icons.stories.html')
    },
    {
        title: 'Product',
        iconData: 'productIcons',
        iconModifierPrefix: 'product',
        markdown: require('./product-icons.stories.md'),
        template: require('./multiple-icons.stories.html')
    },
    {
        title: 'Functional',
        iconData: 'functionalIcons',
        iconModifierPrefix: 'functional',
        markdown: require('./functional-icons.stories.md'),
        template: require('./multiple-icons.stories.html')
    },
    {
        title: 'Social',
        iconData: 'socialIcons',
        iconModifierPrefix: 'social',
        markdown: require('./social-icons.stories.md'),
        template: require('./multiple-icons.stories.html')
    }
];

iconTypes.forEach((iconType) => {
    stories.add(
        iconType.title,
        () => {
            return {
                inject: ['data'],
                data: () => ({
                    iconModifierPrefix: iconType.iconModifierPrefix,
                    icons: []
                }),
                template: iconType.template,
                beforeMount() {
                    this.icons = this.data.icons[iconType.iconData];
                }
            };
        },
        {
            notes: {markdown: iconType.markdown}
        }
    );
});
