import Vue from 'vue';

export default Vue.component('router-link', {
    name: 'router-link',
    template: '<a :href="href"><slot></slot></a>',
    props: {
        to: {
            required: true,
            type: [String, Object],
        },
    },
    computed: {
        href() {
            if (typeof this.to === 'object') {
                return this.to.path;
            }

            return this.to;
        },
    },
});
