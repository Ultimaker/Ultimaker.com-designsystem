import { Prop, Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'legal-nav',
    template: require('./legal-nav.html'),
})
export default class LegalNav extends Vue {
    @Prop({ type: Object, required: true })
    legalNav!: object;

    @Prop({ type: String, required: true })
    copyrightLabel!: string;
}
