import Vue from 'vue';

export default Vue.component('responsive-picture-source', {
    name: 'responsive-picture-source',
    template: `<source :media="media" :srcset="srcset">`,
    props: {
        image: {
            required: true
        },
        media: {
            type: String,
            required: true
        }
    },
    computed: {
        srcset() {
            if (typeof this.image === 'string') {
                return this.image;
            }

            return this.image.retinaUrl ? `${ this.image.url }, ${ this.image.retinaUrl } 2x`: this.image.url;
        }
    }
});
