import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentLink } from './content-link.models';

@Component({
    name: 'content-link',
    template: require('./content-link.html'),
})

export default class ContentLink extends Vue implements IContentLink {
    @Prop({ type: String, default: '' }) block!: IContentLink['block'];
    @Prop({ type: String, default: '' }) mod!: IContentLink['mod'];
    @Prop({ type: String, default: '' }) icon!: IContentLink['icon'];
    @Prop({ type: String, default: '' }) url!: IContentLink['url'];
    @Prop({ type: String, default: '' }) label!: IContentLink['label'];

    get classObject() {
        const classes = {};

        if (this.block !== '') {
            classes[`${ this.block }__link`] = true;
        }
        if (this.mod !== '' && typeof this.mod === 'string') {
            this.mod.split(' ').forEach((mod) => {
                classes[`link--${ mod }`] = true;
            });
        }
        if (this.icon !== '' && this.mod.indexOf('small') === -1) {
            classes['link--icon'] = true;
        }

        return classes;
    }
}
