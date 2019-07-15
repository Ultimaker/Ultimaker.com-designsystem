/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './social-sharing.vue.html';
import { generateSocialSharingUrl } from '../../../utils/generate-social-sharing-url';

const protocolAndHost = 'https://www.ultimaker.com';

@WithRender
@Component({
    name: 'SocialSharing',
})
export class SocialSharing extends Vue {
    $route;

    get items() {
        return [
            {
                type: 'linkedin',
                iconName: 'linkedin',
                label: 'Share on Linkedin',
            },
            {
                type: 'facebook',
                iconName: 'facebook',
                label: 'Share on Facebook',
            },
            {
                type: 'twitter',
                iconName: 'twitter',
                label: 'Share on Twitter',
            },
        ];
    }

    url({ type }) {
        const url = `${protocolAndHost}${this.$route.fullPath}`;

        return generateSocialSharingUrl(url, type);
    }
}
