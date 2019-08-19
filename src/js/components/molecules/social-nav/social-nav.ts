import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './social-nav.vue.html';

@WithRender
@Component({
    name: 'social-nav',
})
export class SocialNav extends Vue {}
