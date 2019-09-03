import { Component, Prop, Vue } from 'vue-property-decorator';
import { HeroHeadingProps } from './hero-heading.models';
import WithRender from './hero-heading.vue.html';

@WithRender
@Component({
    name: 'HeroHeading',
})

export default class HeroHeading extends Vue implements HeroHeadingProps {
    @Prop({ type: String, required: true }) title!: string;
    @Prop({ type: String, required: false }) subtitle?: string;
}
