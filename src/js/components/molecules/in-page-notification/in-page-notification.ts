/** @format */
import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './in-page-notification.vue.html';
import { Notification as NotificationInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/notification/Notification';
import Events from 'constants/events';

@WithRender
@Component({
    name: 'InPageNotification',
})
export class InPageNotification extends Vue implements NotificationInterface {
    @Prop({ type: String, required: true }) public message!: NotificationInterface['message'];
    @Prop({ type: Object, required: false }) public clickEvent?: NotificationInterface['clickEvent'];

    public display: boolean = true;
    public $emitPublic;
    public $route;

    public close(): void {
        this.display = false;
        this.triggerEventClick();
    }

    public clickEventData(): {} | null {
        if (!this.clickEvent) {
            return null;
        }

        const { name, data } = this.clickEvent;
        return {
            dataType: name,
            data: {
                ...data,
                pageSlug: this.$route.fullPath,
            },
        };
    }

    public triggerEventClick(): void {
        if (!this.clickEvent) {
            return;
        }

        this.$emitPublic(Events.gtm.close, this.clickEventData());
    }
}
