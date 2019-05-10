import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'sys-nav',
    template: require('./sys-nav.vue.html'),
})
export default class SysNav extends Vue {
    @Prop({ type: String, default: 'store' })
    orderNowIcon!: string;

    @Prop({ type: String, required: true })
    orderNowLink!: string;

    @Prop({ type: String, required: true })
    orderNowLabel!: string;

    @Prop({ type: String, default: 'search' })
    searchIcon!: string;

    @Prop({ type: String, required: true })
    searchLabel!: string;

    openSearch() {
        this.$emit('open-search');
    }
}
