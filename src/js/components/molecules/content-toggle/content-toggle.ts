import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './content-toggle.vue.html';

@WithRender
@Component({
    name: 'content-toggle',
})
export default class ContentToggle extends Vue {
    @Prop({ type: Boolean, default: false }) toggleState!: boolean;
    @Prop({ type: String, default: 'Less' }) expandedText!: string;
    @Prop({ type: String, default: 'More' }) collapsedText!: string;
    @Prop({ type: String, default: 'angle-up' }) expandedIcon!: string;
    @Prop({ type: String, default: 'angle-down' }) collapsedIcon!: string;

    get toggleText() {
        return this.toggleState ? this.expandedText : this.collapsedText;
    }

    get toggleIcon() {
        return this.toggleState ? this.expandedIcon : this.collapsedIcon;
    }

    toggle() {
        this.$emit('toggle');
    }
}
