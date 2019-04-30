import { Vue, Component, Prop } from 'vue-property-decorator';

import { HeroHeadingProps } from './hero-heading.models';
import './hero-heading.scss';

@Component({
    name: 'HeroHeading',
    template: require('./hero-heading.vue.html'),
})

export default class HeroHeading extends Vue implements HeroHeadingProps {
    @Prop({ type: String, required: true }) title!: string;
    @Prop({ type: String, required: false }) subtitle?: string;

}
