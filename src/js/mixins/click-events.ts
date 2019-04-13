import { Component, Vue } from 'vue-property-decorator';
import Events from 'constants/events';

@Component
export default class ClickEvents extends Vue {
    $emitPublic;
    $route;
    clickEvent?;
    domainRegex: RegExp = /(http(s)?):\/\/(www.)?ultimaker\.com/;
    url;

    get clickEventData() {
        if (this.clickEvent) {
            return {
                dataType: this.clickEvent.name,
                data: {
                    ...this.clickEvent.data,
                    pageSlug: this.$route.fullPath,
                    ctaUrlTarget: this.urlTarget,
                },
            };
        }
        return null;
    }

    get urlTarget() {
        if (this.url) {
            return this.url.match(this.domainRegex) ? '_self' : '_blank';
        }

        return '';
    }

    get clickEventType() {
        return Events.click;
    }

    triggerEventClick(): void {
        if (this.clickEvent) {
            this.$emitPublic(this.clickEventType, this.clickEventData);
        }
    }
}
