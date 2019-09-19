/** @format */
import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './in-page-notification.vue.html';
import { Notification as NotificationInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/notification/Notification';

@WithRender
@Component({
    name: 'InPageNotification',
})
export class InPageNotification extends Vue implements NotificationInterface {
    @Prop({ type: String, required: true }) message!: NotificationInterface['message'];
    public display: boolean = true;

    public close(): void {
        this.display = false;
    }
}
