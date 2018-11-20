import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'tab',
    template: require('./tab.html'),
})

export default class Tab extends Vue {}
