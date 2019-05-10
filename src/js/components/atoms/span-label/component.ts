import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'SpanLabel',
    template: require('./template.vue.html'),
})

export default class SpanLabel  extends Vue {
    @Prop({ type: String, required: true }) item!: string;
}
