import { storiesOf } from '@storybook/vue';
import notes from './colors.stories.md';
import data from './colors.stories.json';

storiesOf('global', module)
    .add(
        'Colors',
        () => ({
            data: () => data,
            template: `<div class="flexgrid">
                <div class="flexgrid__cell--xs-6"> 
                    <h2>Brand colors</h2>
                    <ul class="demo-colors" v-for="color in brandColors">
                        <li>
                            <span class="demo-swatch" :style="{backgroundColor: color.color }"></span>
                                <span class="demo-label">
                                {{ color.text }} <br>
                                {{ color.color }}
                            </span>
                        </li>
                    </ul>
                </div> 
                <div class="flexgrid__cell--xs-6">
                    <h2>Grayscale colors</h2>
                    <ul class="demo-colors" v-for="color in grayscaleColors">
                        <li>
                            <span class="demo-swatch" :style="{backgroundColor: color.color }"></span>
                                <span class="demo-label">
                                {{ color.text }} <br>
                                {{ color.color }}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>`,
        }),
        {
            notes: { markdown: notes },
        },
    );
