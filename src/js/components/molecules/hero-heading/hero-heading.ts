import { Component, Prop, Vue } from 'vue-property-decorator';

import { HeroHeadingProps } from './hero-heading.models';

@Component({
    name: 'HeroHeading',
    template: require('./hero-heading.html'),
})

export default class HeroHeading extends Vue implements HeroHeadingProps {
    @Prop({ type: String, required: true }) title!: string;
    @Prop({ type: String, required: false }) subtitle?: string;
}
