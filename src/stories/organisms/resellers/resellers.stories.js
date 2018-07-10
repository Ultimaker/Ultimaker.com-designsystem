import {storiesOf} from '@storybook/vue';
// import {withKnobs, text} from '@storybook/addon-knobs';
import data from './resellers.stories.json';

storiesOf('organisms|resellers', module)
    // .addDecorator(withKnobs)
    .add(
        'Resellers overview',
        () => {
            // const title = text('Title', data.title);

            return {
                data: () => ({
                    resellers: data
                }),
                template: require('./resellers.stories.html')
            };
        }
    );
