import { Vue, Component, Prop } from 'vue-property-decorator';
import { ContentLinkModel } from './content-link.models';

@Component({
    name: 'content-link',
    template: require('./content-link.html'),
})

export default class ContentLink extends Vue implements ContentLinkModel {
    @Prop() block!: ContentLinkModel['block'];
    @Prop() mod!: ContentLinkModel['mod'];
    @Prop() icon!: ContentLinkModel['icon'];
    @Prop() url!: ContentLinkModel['url'];
    @Prop() label!: ContentLinkModel['label'];

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
