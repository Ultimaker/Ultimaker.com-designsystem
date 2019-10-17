import { Vue, Component } from 'vue-property-decorator';
import WithRender from './hit-area.vue.html';

@WithRender
@Component({
    name: 'HitArea',
})

export class HitArea extends Vue {}
