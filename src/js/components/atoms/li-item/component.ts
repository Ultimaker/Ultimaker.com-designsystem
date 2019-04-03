import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'LiItem',
    template: require('./template.html'),
})

export default class LiItem  extends Vue {
    @Prop({ type: Object, required: true }) item!: object;
}
