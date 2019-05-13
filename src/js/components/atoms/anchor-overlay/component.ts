import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './template.vue.html';

@WithRender
@Component({
    name: 'AnchorOverlay',
})

export default class AnchorOverlay extends Vue {
    @Prop({ type: String, required: true }) title!: string;
    @Prop({ type: String, required: true }) url!: string;
}
