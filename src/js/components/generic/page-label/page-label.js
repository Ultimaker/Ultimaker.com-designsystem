import Vue from 'vue';
import {mapGetters} from 'vuex';
import find from 'lodash/find';

export default Vue.component('page-label', {
    name: 'page-label',
    template: '<span>{{ label }}</span>',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapGetters('page', ['page']),
        label() {
            if (!this.page || !this.page.labels) {
                return '';
            }

            const label = find(this.page.labels, {'key': this.name});

            return label && label.value ? label.value : '';
        }
    }
});
