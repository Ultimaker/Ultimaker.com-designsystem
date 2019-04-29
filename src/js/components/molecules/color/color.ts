import { Vue, Component, Prop } from 'vue-property-decorator';
import { ColorProps } from './color.models';
import { Color as ColorUtil } from 'utils/color';

@Component({
    name: 'color',
    template: require('./color.vue.html'),
})
export default class Color extends Vue implements ColorProps {
    @Prop({ type: String, default: '' })
    background!:string;

    get styleBackground() {
        const styles = {};

        if (this.background !== '') {
            styles['background'] = this.background;
        }

        return styles;
    }

    get styleIcon() {
        const styles = {};

        if (this.background === '') {
            styles['color'] = 'black';

            return styles;
        }
        styles['color'] = ColorUtil.lightness(this.background) >= 0.5 ? 'black' : 'white';

        return styles;
    }
}
