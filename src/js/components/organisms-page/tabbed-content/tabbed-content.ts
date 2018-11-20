import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'tabbed-content',
    template: require('./tabbed-content.html'),
})

export default class TabbedContent extends Vue {}
