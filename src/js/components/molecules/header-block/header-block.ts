import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'HeaderBlock',
    template: require('./header-block.html'),
})

export default class HeaderBlock extends Vue {
    @Prop({ type: String, required: false }) title?: string;
    @Prop({ type: String, required: false }) subtitle?: string;
}
