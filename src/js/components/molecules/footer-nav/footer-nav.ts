import { Component, Prop, Vue } from 'vue-property-decorator';

import { NavigationItem as INavigationItem } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/navigation-item/NavigationItem';

@Component({
    name: 'footer-nav',
    template: require('./footer-nav.vue.html'),
})
export default class FooterNav extends Vue {
    @Prop({ type: Array, required: true }) navigation!: INavigationItem[];
}
