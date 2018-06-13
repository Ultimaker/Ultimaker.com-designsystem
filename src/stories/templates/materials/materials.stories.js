import {storiesOf} from '@storybook/vue';
import {withKnobs, text, object} from '@storybook/addon-knobs';

storiesOf('templates|materials', module)
    .addDecorator(withKnobs)
    .add('Materials', () => {
        return {
            data: () => ({
            }),
            template: `
                <div>
                    <header-main></header-main>
                    <main>
                        <hero-product></hero-product>
                        <ubr></ubr>
                        <examples></examples>
                        <colors></colors>
                    </main>
                    <footer></footer>
                </div>  
            `
        };
    });
