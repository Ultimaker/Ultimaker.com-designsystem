import { Prop, Component, Vue } from 'vue-property-decorator';
import { LegalNavigationCategory as ILegalNavigation } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/navigation/LegalNavigationCategory';
import WithRender from './legal-nav.vue.html';

@WithRender
@Component({
    name: 'legal-nav',
})
export default class LegalNav extends Vue implements ILegalNavigation {
    @Prop({ type: Array, required: true }) items!: ILegalNavigation['items'];
    @Prop({ type: String, required: true }) label!: ILegalNavigation['label'];
}
