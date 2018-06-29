import {storiesOf} from '@storybook/vue';
import {withKnobs, select} from '@storybook/addon-knobs';
import data from './scroll-hint.stories.json';

storiesOf('Molecules|helpers', module)
    .addDecorator(withKnobs)
    .add(
        'Scroll hint',
        () => ({
            data: () => ({
                direction: select('Direction', data.directions.map(t => t.title), data.defaultDirection),
                directions: data.directions
            }),
            computed: {
                currentDirection() {
                    return this.directions.find(d => d.title === this.direction);
                }
            },
            template: require('./scroll-hint.stories.html')
        })
    );
