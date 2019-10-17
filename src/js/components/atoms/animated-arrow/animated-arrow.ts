import { Vue, Component } from 'vue-property-decorator';
import WithRender from './animated-arrow.vue.html';

@WithRender
@Component({
    name: 'AnimatedArrow',
})
export class AnimatedArrow extends Vue {}
