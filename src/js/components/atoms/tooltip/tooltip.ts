import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './tooltip.vue.html';

@WithRender
@Component({
    name: 'Tooltip',
})

export default class Tooltip extends Vue {
    @Prop({ type: String, required: false, default: '' }) block?: string;

    classObject() {
        const classes = {};

        if (this.block) {
            classes[`${this.block}__tooltip`] = true;
        }

        return classes;
    }
}
