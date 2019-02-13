import { Vue, Component, Prop } from 'vue-property-decorator';

import ViewportUtility from 'utils/viewport';

import { LinkList as LinkListInterface } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/link-list/LinkList';
import BrowserCapabilities from 'utils/browser-capabilities';

@Component({
    name: 'main-nav-item',
    template: require('./main-nav-item.html'),
})

export default class MainNavItem extends Vue  {
    @Prop({ type: Object, required: true }) linkList!: LinkListInterface;
    @Prop({ type: Boolean, required: false }) mainNavOpen?: boolean;
}
