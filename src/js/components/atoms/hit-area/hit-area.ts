import { Vue, Component } from 'vue-property-decorator';

@Component({
    name: 'hit-area',
    template: require('./hit-area.vue.html'),
})

export default class HitArea extends Vue {}
