/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './hero-home.vue.html';

interface IHeroHome {
    title: string;
    description: string;
}

@WithRender
@Component({
    name: 'hero-home',
})
export default class HeroHome extends Vue implements IHeroHome {
    @Prop({ type: String, required: true }) title!: IHeroHome['title'];
    @Prop({ type: String, required: true }) description!: IHeroHome['description'];

    // get srcSet() {
    //     return `
    //         $()
    //     `.trim();
    // }
}
