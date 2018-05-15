import { storiesOf } from '@storybook/vue';
import {
    withKnobs,
    text,
    number,
    boolean,
    array,
    select,
    color,
    date,
    button,
} from '@storybook/addon-knobs/vue';

import * as KnobVue from '@storybook/addon-knobs/vue';

storiesOf('atoms|button', module)
    .addDecorator(withKnobs)
    .add('Regular', () => {
        const icon = text('Icon', null);
        const objProperty = text('objProperty', 'test'),
            obj = {
                objProperty
            };

        return {
            template: `<btn icon="${ icon }" obj="${ JSON.toString(obj) }">slot</btn>`
        }
    });
