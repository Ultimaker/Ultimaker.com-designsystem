import { Vue, Component } from 'vue-property-decorator';
import WithRender from './hit-area.vue.html';

@WithRender
@Component({
    name: 'hit-area',
})

export default class HitArea extends Vue {}
