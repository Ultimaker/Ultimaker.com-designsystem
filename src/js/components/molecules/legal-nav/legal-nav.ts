import { Prop, Component, Vue } from 'vue-property-decorator';
import { LegalNavigation as ILegalNavigation } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/legal-navigation/LegalNavigation';
import WithRender from './legal-nav.vue.html';

@WithRender
@Component({
    name: 'legal-nav',
})
export default class LegalNav extends Vue implements ILegalNavigation {
    @Prop({ type: Array, required: true }) navigation!: ILegalNavigation['navigation'];
    @Prop({ type: String, required: true }) label!: ILegalNavigation['label'];
}
