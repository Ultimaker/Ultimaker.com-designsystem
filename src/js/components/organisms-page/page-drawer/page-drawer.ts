import { Vue, Component } from 'vue-property-decorator';

@Component({
    name: 'page-drawer',
    template: '<section class="drawer" v-size-emitter="\'drawer\'"><slot></slot></section>',
})

export default class PageDrawer extends Vue {}
