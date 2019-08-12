/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './hero-homepage.vue.html';
import { HeroHomepageProps } from './hero-homepage.models';
import { buildSrcSet } from './helpers/build-srcset';

@WithRender
@Component({
    name: 'hero-homepage',
})
export default class HeroHomepage extends Vue implements HeroHomepageProps {
    @Prop({ type: String, required: true }) title!: HeroHomepageProps['title'];
    @Prop({ type: String, required: false }) description?: HeroHomepageProps['description'];
    @Prop({ type: Object, required: false }) image?: HeroHomepageProps['image'];
    @Prop({ type: Object, required: false }) ctas?: HeroHomepageProps['ctas'];

    get srcSet(): string {
        if (!this.image) return '';

        const { url } = this.image;
        return buildSrcSet({ url });
    }

    get srcSetWebP(): string {
        if (!this.image) return '';

        const { url } = this.image;
        return buildSrcSet({ url, webP: true });
    }
}
