import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'ListUnordered',
    template: require('./template.vue.html'),
})

export default class ListUnordered extends Vue {
    @Prop({ type: Object, required: true }) listItems!: { items: [string[] | object[]], type: string };
}
