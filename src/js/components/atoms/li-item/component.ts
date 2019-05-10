import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'LiItem',
    template: require('./template.vue.html'),
})

export default class LiItem extends Vue {
    @Prop({ type: [String, Object], required: true }) item!: string | { item: string, type: string };
}
