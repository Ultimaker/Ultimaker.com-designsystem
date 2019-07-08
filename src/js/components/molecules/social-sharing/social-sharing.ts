/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import { SocialSharingProps } from './social-sharing.models';
import WithRender from './social-sharing.vue.html';

@WithRender
@Component({
    name: 'SocialSharing',
})
export class SocialSharing extends Vue implements SocialSharingProps {
    @Prop({ type: Array, required: true }) items!: SocialSharingProps['items'];
}
