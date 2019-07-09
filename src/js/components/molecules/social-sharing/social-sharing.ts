/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './social-sharing.vue.html';
import { generateSocialSharingUrl } from '../../../utils/generate-social-sharing-url';
import BrowserCapabilities from '../../../utils/browser-capabilities';

@WithRender
@Component({
    name: 'SocialSharing',
})

export class SocialSharing extends Vue {
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
        const url = BrowserCapabilities.isBrowser
            ? window.location.href
            : '#';

        return generateSocialSharingUrl(url, type);
    }
}
