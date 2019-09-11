import { Vue, Component, Prop } from 'vue-property-decorator';
import { PageFooterProps } from './page-footer.models';
import WithRender from './page-footer.vue.html';

@WithRender
@Component({
    name: 'PageFooter',
})

export class PageFooter extends Vue implements PageFooterProps {
    @Prop({ type: Array, required: true }) navigation!: PageFooterProps['navigation'];
    @Prop({ type: Object, required: true }) localeSelector!: PageFooterProps['localeSelector'];
    @Prop({ type: Array, required: true }) legalNavigation!: PageFooterProps['legalNavigation'];
    @Prop({ type: String, required: true }) copyrightLabel!: PageFooterProps['copyrightLabel'];
    @Prop({ type: String, required: false }) language?: PageFooterProps['language'];
    @Prop({ type: Object, required: true }) country!: object;
}
