import { Vue, Component, Prop } from 'vue-property-decorator';
import { IconButtonProps } from './icon-button.models';

@Component({
    name: 'icon-button',
    template: require('./icon-button.html'),
})

export default class IconButton extends Vue implements IconButtonProps {
    @Prop({ type: String }) buttonClass?: string;
    @Prop({ type: String, required: true, default: '' }) buttonAriaLabel!: string;
    @Prop({ type: String, default: {} }) iconName?: string;

    get hasDefaultSlot(): boolean {
        return !!this.$slots.default;
    }

    public focus(): void {
        this.$el.focus();
    }

}
