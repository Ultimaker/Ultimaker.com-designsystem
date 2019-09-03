import { Vue, Component } from 'vue-property-decorator';
import WithRender from './animated-arrow.vue.html';

@WithRender
@Component({
    name: 'animated-arrow',
})
export default class AnimatedArrow extends Vue {}
