import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'tabs',
    template: require('./tabs.html'),
})

export default class Tabs extends Vue {
    private tabs:Vue[] = [];

    created() {
        this.tabs = this.$children;
    }
}
