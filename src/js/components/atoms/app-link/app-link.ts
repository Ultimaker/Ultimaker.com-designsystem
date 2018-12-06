import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'app-link',
    template: require('./app-link.html'),
})

export default class AppLink extends Vue {
    @Prop({ type: String, required: true }) to!: string;

    public linkProps():Object {
        if (this.to.match(/^(http(s)?):\/\//)) {
            return {
                is: 'a',
                href: this.to,
                target: '_blank',
                rel: 'noopener',
            };
        }
        return {
            is: 'router-link',
            to: this.to,
        };
    }
}
