import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './icon.vue.html';

const defaultIconUrl = '/static/icons/iconset.svg';

@WithRender
@Component({
    name: 'icon',
})
export default class Icon extends Vue {
    @Prop({ type: String, required: true }) iconName!: string;

    /* eslint-disable dot-notation */
    readonly iconUrl:string = window['svgIconMap'] || defaultIconUrl;
    ready:boolean = false;
    symbolData?:string|null = null;

    viewBox?:string|null = null;

    get iconId() {
        return `icon-${this.iconName}`;
    }

    get iconClass() {
        return `icon--${this.iconName}`;
    }

    get iconRef() {
        return `${this.iconUrl}#icon-${this.iconName}`;
    }

    mounted() {
        // Only render in browser
        this.ready = true;
    }
}
