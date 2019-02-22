import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'icon-button',
    template: require('./icon-button.html'),
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
