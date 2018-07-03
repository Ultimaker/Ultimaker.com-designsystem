import {storiesOf} from '@storybook/vue';
// import {withKnobs, text} from '@storybook/addon-knobs';
import data from './resellers-overview.stories.json';

storiesOf('organisms|resellers-overview', module)
    // .addDecorator(withKnobs)
    .add(
        'Resellers overview',
        () => {
            // const title = text('Title', data.title);

            return {
                data: () => ({
                    resellers: data
                }),
                template: require('./resellers-overview.stories.html')
            };
        }
    );
