import { storiesOf } from '@storybook/vue';
import { withKnobs, text, select } from '@storybook/addon-knobs';

storiesOf('atoms|content-link', module)
    .addDecorator(withKnobs)
    .add('content-link', () => {
        const slot = text('Label', 'content link label');
        const href = text('HREF', 'https://www.ultimaker.com');
        const mods = select('modifier', {
            "" : "Default",
            "large": "Large",
            "icon": "Icon",
            "icon link--large": "Icon Large"
        }, 'Default');

        return {
            data: () => ({
                slot,
                href,
                mods
            }),
            template: `<content-link :mod="mods" :href="href">{{slot}}</content-link>`
        }
});