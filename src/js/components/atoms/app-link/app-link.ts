import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'app-link',
    template: require('./app-link.html'),
})

export default class AppLink extends Vue {
    @Prop({ type: String, required: true }) to?: string;

    public linkProps(url:string):Object {
        if (url && url.match(/^(http(s)?):\/\//)) {
            return {
                is: 'a',
                href: url,
                target: '_blank',
                rel: 'noopener',
            };
        }
        return {
            is: 'router-link',
            to: url,
        };
    }
}
