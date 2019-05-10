import { Vue, Component } from 'vue-property-decorator';

@Component({
    name: 'animated-arrow',
    template: require('./animated-arrow.vue.html'),
})
export default class AnimatedArrow extends Vue {}
