import { Vue, Component, Prop } from 'vue-property-decorator';
import { IAppLink } from 'src/js/components/atoms/app-link/app-link.models';

@Component({
    name: 'app-link',
    template: require('./app-link.html'),
})

export default class AppLink extends Vue implements IAppLink {
    @Prop({ type: String, required: true }) to!: string;
    @Prop({ type: String, default: '' }) url!: string;
    @Prop({ type: String, default: '' }) label!: string;

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
