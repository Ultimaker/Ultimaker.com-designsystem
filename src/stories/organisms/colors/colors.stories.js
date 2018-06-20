import {storiesOf} from '@storybook/vue';
import data from './colors.stories.json';

storiesOf('organisms|colors', module)

    .add(
        'Colors',
        () => {
            return {
                data: () => ({
                    colors: {
                        title: data.title,
                        material: data.material
                    }
                }),
                template: require('./colors.stories.html')
            };
        },
        {
            notes: {markdown: require('./colors.stories.md')}
        }
    );
