import { Vue, Component, Prop } from 'vue-property-decorator';
import { CtaBlock as ICtaBlock } from '@ultimaker/ultimaker.com-model-definitions/dist/molecules/cta/CtaBlock';
import { Button } from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/Button';

import AppLink from 'src/js/components/atoms/app-link';
import ContentLink from 'src/js/components/atoms/content-link';

@Component({
    name: 'cta-block',
    template: require('./cta-block.html'),
    components: {
        AppLink,
        ContentLink,
    },
})

export default class CtaBlock extends Vue implements ICtaBlock {
    @Prop({ type: Array, required: true }) ctas!: ICtaBlock['ctas'];

    componentMapper(cta) {
        const mapCta = (cta instanceof Button) ? AppLink : ContentLink;
        return mapCta;
    }

    ctaProps(cta) {
        if (cta instanceof Button) {
            return {
                class: 'button button--primary hero__button',
                to: cta.url,
            };
        } else {
            return {
                class: 'link--large',
                href: cta.url,
                icon: cta.icon,
            };
        }
    }
}
