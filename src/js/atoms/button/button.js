import Vue from 'vue';

export default Vue.component('btn', {
    name: 'btn',
    template: '<button><template v-if="icon">{{ icon }}</template><slot /></button>',
    props: {
        icon: {
            type: String
        },
        obj: {
            type: Object
        }
    },
    beforeMount() {}
})