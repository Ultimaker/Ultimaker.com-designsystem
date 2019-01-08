import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentLinkProps } from './content-link.models';
@Component({
    name: 'content-link',
    template: require('./content-link.html'),
})

export default class ContentLink extends Vue implements IContentLinkProps {
    @Prop({ type: String, default: '' }) block!: string;
    @Prop({ type: String, default: '' }) mod!: string;
    @Prop({ type: String, default: '' }) icon!: string;
    @Prop({ type: String, default: '' }) href!: string;

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
