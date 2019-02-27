import { Vue, Component, Prop } from 'vue-property-decorator';
import { IBaseLink } from './base-link.models';

@Component({
    name: 'base-link',
    template: require('./base-link.html'),
})

export default class BaseLink extends Vue implements IBaseLink {
    @Prop({ type: String }) block?: IBaseLink['block'];
    @Prop({ type: String }) mod?: IBaseLink['mod'];
    @Prop({ type: String }) icon?: IBaseLink['icon'];
    @Prop({ type: String, default: '' }) url!: IBaseLink['url'];
    @Prop({ type: String, default: '' }) label!: IBaseLink['label'];
    @Prop({ type: String, default: '' }) href!: IBaseLink['url'];

    absoluteUrlRegex: RegExp = /^(http(s)?):\/\//;
    domainRegex: RegExp = /(http(s)?):\/\/(www.)?ultimaker\.com/;

    get link () {
        return this.url || this.href;
    }

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
        if (this.icon !== '' && this.mod && this.mod.indexOf('small') === -1) {
            classes['link--icon'] = true;
        }

        return classes;
    }

    get linkProps(): object {
        if (this.link.match(this.absoluteUrlRegex)) {
            return {
                is: 'a',
                href: this.link,
                target: this.link.match(this.domainRegex) ? '_self' : '_blank',
                rel: 'noopener',
            };
        }
        return {
            is: 'router-link',
            to: this.link,
        };
    }
}
