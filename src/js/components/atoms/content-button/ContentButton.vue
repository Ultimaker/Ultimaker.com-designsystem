<script lang="ts">
import Vue from 'vue';
import BaseLink from 'components/atoms/BaseLink/BaseLink.vue';

export default Vue.component('ContentButton', {
    extends: BaseLink,
    props: {
        icon: {
            type: String,
            required: false,
        },
        url: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        clickEvent: {
            type: Object,
            required: false,
        },
    }
});
</script>
