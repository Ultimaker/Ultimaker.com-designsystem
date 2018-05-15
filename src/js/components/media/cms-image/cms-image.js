import Vue from 'vue';

function getImage(image, orientation, device) {
    const format = `${ orientation }_${ device }`;

    if (image.links && image.links[format] && image.links[format][0]) {
        return image.links[format][0].href;
    }

    return '';
}

export default Vue.component('cms-image', {
    name: 'cms-image',
    template: require('./cms-image.html'),
    props: {
        image: {
            type: Object,
            required: true
        },
        orientation: {
            type: String,
            required: true,
            default: 'square'
        }
    },
    computed: {
        mobileImage() {
            return getImage(this.image, this.orientation, 'mobile');
        },
        desktopImage() {
            return getImage(this.image, this.orientation, 'desktop');
        },
        desktopRetinaImage() {
            return getImage(this.image, this.orientation, 'desktop');
        },
        styles() {
            switch (this.orientation) {
                case 'square': // 1:1
                    return {'padding-top': '100%'};
                case 'landscape': // 5:3
                    return {'padding-top': '60%'};
                case 'portrait': // 3:5
                    return {'padding-top': '165%'};
                case 'landscapefull': // 14:5
                    return {'padding-top': '35%'};
                default:
                    return {};
            }
        }
    }
});
