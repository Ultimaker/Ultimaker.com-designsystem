import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
    name: 'footer-nav',
    template: require('./footer-nav.html'),
})
export default class FooterNav extends Vue {
    @Prop({ type: Object, required: true})
    minorNav!: object;
}
