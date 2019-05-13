import { Vue, Component, Prop } from 'vue-property-decorator';
import { PageFooter as IPageFooter } from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/page-footer/PageFooter';
import WithRender from './page-footer.vue.html';

@WithRender
@Component({
    name: 'page-footer',
})

export default class PageFooter extends Vue implements IPageFooter {
    @Prop({ type: Array, required: true }) navigation!: IPageFooter['navigation'];
    @Prop({ type: Object, required: true }) localeSelector!: IPageFooter['localeSelector'];
    @Prop({ type: Object, required: true }) legalNavigation!: IPageFooter['legalNavigation'];
    @Prop({ type: Object, required: true }) country!: object;
}
