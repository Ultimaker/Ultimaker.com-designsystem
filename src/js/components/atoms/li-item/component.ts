import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'LiItem',
    template: require('./template.html'),
})

export default class LiItem  extends Vue {
    @Prop({ type: String, required: true }) item!: string;
}
