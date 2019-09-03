import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './header-block.vue.html';

@WithRender
@Component({
    name: 'HeaderBlock',
})

export default class HeaderBlock extends Vue {
    @Prop({ type: String, required: false }) title?: string;
    @Prop({ type: String, required: false }) subtitle?: string;
}
