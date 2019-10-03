import WithRender from './icon.vue.html';
import { Component, Prop, Vue } from 'vue-property-decorator';

@WithRender
@Component({
    name: 'icon',
})
export class Icon extends Vue {
    @Prop({ type: String, required: true }) public iconName!: string;

    public get iconClass(): string {
        return `icon--${this.iconName}`;
    }

    public get iconHref(): string {
        return `#icon-${this.iconName}`;
    }
}
