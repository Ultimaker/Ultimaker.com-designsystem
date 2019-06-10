import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import WithRender from './nav-assist.vue.html';

@WithRender
@Component({
    name: 'nav-assist',
})
export default class NavAssist extends Vue {
    used:boolean = false;

    @Prop({ type: Boolean, default: false }) openState!:boolean;

    toggleState() {
        this.used = true;
        this.$emit('toggle');
    }

    close() {
        if (this.openState) {
            this.$emit('toggle');
        }
    }

    @Watch('openState')
    onOpenStateChange() {
        this.used = true;
        this.$emit('used');
    }
}
