/** @format */
import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './in-page-notification.vue.html';

@WithRender
@Component({
    name: 'InPageNotification',
})
export class InPageNotification extends Vue {
    @Prop({ type: String, required: true }) message!: string;
    public display: boolean = true;

    public hide() {
        this.display = false;
    }
}
