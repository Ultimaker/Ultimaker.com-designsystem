/** @format */

import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './li-inline.vue.html';

@WithRender
@Component({
    name: 'LiInline',
})
export class LiInline extends Vue {
    @Prop({ type: [String, Object], required: true }) item!: string | { item: string; type: string };
}
