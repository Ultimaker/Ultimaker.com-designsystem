/** @format */
import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './content-toggle.vue.html';

@WithRender
@Component({
    name: 'ContentToggle',
})
export class ContentToggle extends Vue {
    @Prop({ type: String, required: false, default: 'angle-up' }) public collapseIcon!: string;
    @Prop({ type: String, required: false, default: 'Less' }) public collapseText!: string;
    @Prop({ type: String, required: false, default: 'angle-down' }) public expandIcon!: string;
    @Prop({ type: String, required: false, default: 'More' }) public expandText!: string;
    @Prop({ type: Boolean, required: false }) public initiallyExpanded!: boolean;
    @Prop({ type: Boolean, default: true }) public preventDefault!: boolean;

    private expanded: boolean = this.initiallyExpanded || false;

    private get toggleIcon(): string {
        return this.expanded ? this.collapseIcon : this.expandIcon;
    }

    private get toggleText(): string {
        return this.expanded ? this.collapseText : this.expandText;
    }

    private toggle(evt: Event): void {
        if (this.preventDefault) {
            evt.preventDefault();
        }

        this.expanded = !this.expanded;
        this.$emit('content-toggle', { expanded: this.expanded });
    }
}
