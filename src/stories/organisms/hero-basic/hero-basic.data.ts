import {Button} from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/Button';
import {ContentLink} from '@ultimaker/ultimaker.com-model-definitions/dist/atoms/cta/ContentLink';
import {HeroBasic} from '@ultimaker/ultimaker.com-model-definitions/dist/organisms/hero/HeroBasic';

const props = Object.assign(new HeroBasic(), {
    title: 'Lorem ipsum dolor sit amet',
    subtitle: 'Maecenas faucibus mollis interdum nulla vitae elit libero a pharetra augue',
    description: 'Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue.',
    image: {
        url: 'https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
        alt: 'An example image',
        quality: 65,
        radius: 0,
        imageFormat: 'png',
        resizeBehavior: 'fill',
        focusArea: 'center',
        backgroundColor: null,
    },
    ctas: [
        Object.assign(new Button(), {
            label: 'Request a quote',
            url: '/en/quote'
        }),
        Object.assign(new ContentLink(), {
            label: 'Content link',
            url: '/en/link'
        })
    ]
});

export default props
