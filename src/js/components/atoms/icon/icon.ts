import { Vue, Component, Prop } from 'vue-property-decorator';

const defaultIconUrl = '/static/icons/iconset.svg';

@Component({
    name: 'icon',
    template: require('./icon.vue.html'),
})
export default class Icon extends Vue {
    @Prop({ type: String, required: true }) iconName!: string;

    ready:boolean = false;
    symbolData?:string|null = null;
    viewBox?:string|null = null;

    get iconId() {
        return `icon-${ this.iconName }`;
    }

    get iconClass() {
        return `icon--${ this.iconName }`;
    }

    get iconUrl() {
        return window['svgIconMap'] || defaultIconUrl;
    }

    get iconRef() {
        return `${ this.iconUrl }#icon-${ this.iconName }`;
    }

    mounted() {
        // Only render in browser
        this.ready = true;
    }
}
