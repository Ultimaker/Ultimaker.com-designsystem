<template>
    <div class="article-author">
        <c-image
            v-if="image"
            v-bind="image"
            class="article-author__image"
            :sizes="'96px'"
            :srcset-widths="[48, 96]"
        />
        <div  class="article-author__meta">
            <span class="article-author__name">{{name}}</span>
            <span class="article-author__published-date">{{formatedDate}}</span>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Format } from 'utils/format';
export default Vue.component('ArticleAuthor', {
    props: {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: Object,
            required: false,
        },
        publishedDate: {
            type: String,
            required: true,
        },
    },
    computed: {
        formatedDate: function(): string {
            return Format.ISODate(this.publishedDate);
        }
    },
});
</script>
