import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './sys-nav.vue.html';

import { SysNavProps } from './sys-nav.models';
@WithRender
@Component({
    name: 'sys-nav',
})
export class SysNav extends Vue implements SysNavProps {
    @Prop({ type: String, default: 'store' }) orderNowIcon!: SysNavProps['orderNowIcon'];
    @Prop({ type: String, required: true }) orderNowLink!: SysNavProps['orderNowLink'];
    @Prop({ type: String, required: true }) orderNowLabel!: SysNavProps['orderNowLabel'];
    @Prop({ type: String, default: 'search' }) searchIcon!: SysNavProps['searchIcon'];
    @Prop({ type: String, required: true }) searchLabel!: SysNavProps['searchLabel'];

    openSearch() {
        this.$emit('open-search');
    }
}
