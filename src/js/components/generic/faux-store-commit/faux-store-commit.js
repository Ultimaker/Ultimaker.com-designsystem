import Vue from 'vue';

export default Vue.component('faux-store-commit', {
    name: 'faux-store-commit',
    render: () => ({}),
    props: {
        mutation: {
            type: String,
            required: true,
        },
        data: {
            required: true,
        },
    },
    created() {
        this.$store.commit(this.mutation, this.data);
    },
});
