import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'FooterBlock',
    template: require('./footer-block.html'),
})

export default class FooterBlock extends Vue {
    @Prop({ type: String, required: false }) ctas?: object;
}
