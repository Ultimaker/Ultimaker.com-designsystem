import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './nav-assist.vue.html';

@WithRender
@Component({
    name: 'nav-assist',
})
export default class NavAssist extends Vue {
    @Prop({ type: Boolean, default: false }) openState!:boolean;

    inInitialState: boolean = true;

    get ariaExpanded(): string {
        return this.openState.toString();
    }

    toggleState(): any {
        this.inInitialState = false;

        if (this.openState) {
            return this.$emit('nav-assist-click', 'close-mobile-nav');
        }

        return this.$emit('nav-assist-click', 'open-mobile-nav');
    }

    close(): void {
        if (this.openState) {
            this.$emit('nav-assist-click', 'close-mobile-nav');
        }
    }
}
