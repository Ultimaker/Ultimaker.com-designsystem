import { Component, Prop, Vue } from 'vue-property-decorator';
import { ColorsProps } from './colors.models';
import WithRender from './colors.vue.html';

@WithRender
@Component({
    name: 'Colors',
})
export class Colors extends Vue implements ColorsProps {
    @Prop({ type: String, required: true }) title!: ColorsProps['title'];
    @Prop({ type: String }) subtitle?: ColorsProps['subtitle'];
    @Prop({ type: Object, required: true }) colorCtas!: ColorsProps['colorCtas'];
    @Prop({ type: Array, required: true }) colorList!: ColorsProps['colorList'];
    @Prop({ type: Object }) ctas?: ColorsProps['ctas'];

    activeColorIndex: number = 0;

    get activeColor() {
        return this.colorList[this.activeColorIndex];
    }

    setActiveColor(index:number):void {
        this.activeColorIndex = index;
    }
}
