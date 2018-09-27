import {text} from '@storybook/addon-knobs';
import data from './cta-block.stories.json';

export default () => ({
    ctas: {
        button: {
            uri: text('CTA-block - button url', data.ctas.button.uri),
            title: text('CTA-block - button title', data.ctas.button.title)
        },
        link: {
            uri: text('CTA-block - link url', data.ctas.link.uri),
            title: text('CTA-block - link title', data.ctas.link.title)
        }
    }
});
