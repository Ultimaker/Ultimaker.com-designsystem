import { Vue, Component, Prop } from 'vue-property-decorator';
import { ColorProps } from './color.models';
import { Color as ColorUtil } from 'utils/color';
import WithRender from './color.vue.html';

@WithRender
@Component({
    name: 'color',
})
export default class Color extends Vue implements ColorProps {
    @Prop({ type: String, required: true })
    rgbHex!: ColorProps['rgbHex'];

    @Prop({ type: Number, required: true })
    opacity!: ColorProps['opacity'];

    $el!:HTMLElement;
    get styleBackground() {
        const styles:{[key: string]: any} = {};

        styles.background = this.color;
        if (this.opacity < 100) {
            styles.opacity = this.opacity / 100;
        }

        return styles;
    }

    get styleIcon() {
        const styles:{[key: string]: any} = {};

        styles.color = ColorUtil.lightness(this.color) >= 0.5 ? '#000' : '#FFF';

        return styles;
    }

    get color() {
        const hexColorNoPrefix = (/^([A-Fa-f0-9]{6})/);
        if (this.rgbHex && this.rgbHex.match && this.rgbHex.match(hexColorNoPrefix)) {
            return `#${this.rgbHex}`;
        }

        return this.rgbHex;
    }
}
