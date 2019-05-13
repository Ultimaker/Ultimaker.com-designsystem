import { Vue, Component, Prop } from 'vue-property-decorator';
import { ColorProps } from './color.models';
import { Color as ColorUtil } from 'utils/color';
import WithRender from './color.vue.html';
import { TransparencyLevel } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/products/TransparencyLevel';

@WithRender
@Component({
    name: 'color',
})
export default class Color extends Vue implements ColorProps {
    @Prop({ type: String, required: true })
    rgbHex!:string;

    @Prop({ type: Number, required: true })
    transparency!: TransparencyLevel;

    get styleBackground() {
        const styles = {};

        styles['background'] = this.rgbHex;
        if (this.transparency < 100) {
            styles['opacity'] = this.transparency / 100;
        }

        return styles;
    }

    get styleIcon() {
        const styles = {};

        styles['color'] = ColorUtil.lightness(this.rgbHex) >= 0.5 ? 'black' : 'white';

        return styles;
    }
}
