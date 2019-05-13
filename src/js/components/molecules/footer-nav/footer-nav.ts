import { Component, Prop, Vue } from 'vue-property-decorator';

import { NavigationItem as INavigationItem } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/navigation-item/NavigationItem';
import WithRender from './footer-nav.vue.html';

@WithRender
@Component({
    name: 'footer-nav',
})
export default class FooterNav extends Vue {
    @Prop({ type: Array, required: true }) navigation!: INavigationItem[];
}
