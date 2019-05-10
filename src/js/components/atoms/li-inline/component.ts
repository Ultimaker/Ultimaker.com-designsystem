import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'LiInline',
    template: require('./template.vue.html'),
})

export default class LiInline  extends Vue {
    @Prop({ type: [String, Object], required: true }) item!: string | { item: string, type: string };
}
