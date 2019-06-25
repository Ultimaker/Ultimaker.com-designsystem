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
    @Prop({ type: Object, required: true }) legalNavigation!: PageFooterProps['legalNavigation'];
}
