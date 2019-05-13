import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './footer-block.vue.html';

@WithRender
@Component({
    name: 'FooterBlock',
})

export default class FooterBlock extends Vue {
    @Prop({ type: Object, required: false }) ctas?: object;
}
