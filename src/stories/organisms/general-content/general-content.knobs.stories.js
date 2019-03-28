import {text, boolean, array} from '@storybook/addon-knobs';
import data from './general-content.stories.json';

export default () => ({
    generalContent: {
        ... data,
        reversed: boolean('General-content - content reversed', data.reversed),
        title: text('General-content - title', data.title),
        description: array('General-content - text', data.description),
        ctas: {
            ... data.ctas,
            ctas: data.ctas.ctas.map((cta, i) => ({
                ... cta,
                label: text(`General-content - label  ${i}`, cta.label),
                url: text(`General-content - url ${i}`, cta.url)
            }))
        }
    }
});
