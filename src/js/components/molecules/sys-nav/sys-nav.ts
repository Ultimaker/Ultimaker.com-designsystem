import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'sys-nav',
    template: require('./sys-nav.html'),
})
export default class SysNav extends Vue {
    @Prop({ type: String, required: true })
    orderNowLabel!: string;

    @Prop({ type: String, required: true })
    searchLabel!: string;

    openSearch() {
        this.$emit('openSearch');
    }
}
