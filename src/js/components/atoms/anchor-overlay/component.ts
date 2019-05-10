import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'AnchorOverlay',
    template: require('./template.vue.html'),
})

export default class AnchorOverlay extends Vue {
    @Prop({ type: String, required: true }) title!: string;
    @Prop({ type: String, required: true }) url!: string;
}
