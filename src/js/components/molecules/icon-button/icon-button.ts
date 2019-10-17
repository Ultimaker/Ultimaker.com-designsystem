import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './icon-button.vue.html';

@WithRender
@Component({
    name: 'IconButton',
})
export class IconButton extends Vue {
    @Prop({ type: String, default: null }) public buttonAriaLabel!: string;
    @Prop({ type: String, default: null }) public buttonClass!: string;
    @Prop({ type: Boolean, default: false }) public disabled!: boolean;
    @Prop({ type: String, default: null }) public iconName!: string;
    @Prop({ type: Boolean, default: true }) public preventDefault!: boolean;

    public clickHandler(evt: Event): void {
        if (this.preventDefault) {
            evt.preventDefault();
        }

        this.$emit('click'); // @todo: phase out use of this emit
        this.$emit('icon-button-click');
    }
}
