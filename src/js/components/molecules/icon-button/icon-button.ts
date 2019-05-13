import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './icon-button.vue.html';

@WithRender
@Component({
    name: 'icon-button',
})
export default class IconButton extends Vue  {
    @Prop({ type: String })
    buttonClass!: string;
    @Prop({ type: String, default: '' })
    buttonAriaLabel!: string;
    @Prop({ type: String })
    iconName!: string;

    $el!:HTMLElement;

    get hasDefaultSlot() {
        return !!this.$slots.default;
    }

    focus() {
        this.$el.focus();
    }
}
