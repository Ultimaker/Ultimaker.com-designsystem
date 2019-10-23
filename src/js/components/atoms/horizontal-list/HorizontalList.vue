<template>
    <section :class="styleModifier">
        <strong class="caption-list__headline">
            {{ label }}
        </strong>
        <ul class="caption-list">
            <li class="caption-list__list-item" v-for="item in listItems">
                {{ item.additionalContent }}
                <a :href="item.url">{{ item.text }}</a>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('HorizontalList', {
    props: {
        styleModifier: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: true,
        },
        listItems: {
            type: Array,
            required: true,
        },
    }
});
</script>
