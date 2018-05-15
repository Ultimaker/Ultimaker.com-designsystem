import { storiesOf } from '@storybook/vue';
import { withKnobs, text, object} from '@storybook/addon-knobs/vue';

import * as KnobVue from '@storybook/addon-knobs/vue';

storiesOf('atoms|button', module)
    .addDecorator(withKnobs)
    .add('Regular', () => {
        const icon = text('Icon', 'null');
        const data = { lala: 'hihi' };
        const objProperty = object('data', data);

        return {
            data: () => {
                return {
                    data: data
                }
            },
            template: `<btn icon="${ icon }" :obj="data">slot</btn>`
        }
    });
