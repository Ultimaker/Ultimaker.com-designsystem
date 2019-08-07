/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './hero-home.vue.html';
// import { HeroHomepage } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/hero/HeroHomepage';


interface HeroHomepage {
    title: string;
    description: string;
    imageUrl: string;
}

@WithRender
@Component({
    name: 'hero-home',
})
export default class HeroHome extends Vue implements HeroHomepage {
    @Prop({ type: String, required: true }) title!: HeroHomepage['title'];
    @Prop({ type: String, required: true }) description!: HeroHomepage['description'];
    @Prop({ type: String, required: true }) imageUrl!: HeroHomepage['imageUrl'];

    get srcSet(): string {
        return `
            ${this.imageUrl}?w=640 640w,
            ${this.imageUrl}?w=1536 1536w,
            ${this.imageUrl}?w=2880
        `.trim()
    }

    get srcSetWebP(): string {
        return `
            ${this.imageUrl}?w=640&fm=webp 640w,
            ${this.imageUrl}?w=1536&fm=webp 1536w,
            ${this.imageUrl}?w=2880&fm=webp
        `.trim()
    }
}
