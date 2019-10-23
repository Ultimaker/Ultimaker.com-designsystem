<template>
    <a class="link link--icon link--large" :href="youtubeUrl" target="_blank" @click.prevent="toggleVideoVisible">
        <icon :icon-name="icon" />
        <span class="link__underline">
            {{label}}
        </span>
        <portal to="modals">
            <modal class="modal--video" v-if="videoVisible" @close="toggleVideoVisible">
                <youtube-video :video-id="youtubeId" />
            </modal>
        </portal>
    </a>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseLink from 'components/atoms/BaseLink/BaseLink.vue';
import YoutubeConstants from 'constants/youtube';

export default Vue.component('YoutubeLink', {
    extends: BaseLink,
    props: {
        icon: {
            type: String,
            required: false,
            default: 'play-video',
        },
        youtubeId: {
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
    },
    data() {
        return {
            videoVisible: false,
        }
    },
    computed: {
        youtubeUrl: function(): string {
            return `${YoutubeConstants.videoUrl}${this.youtubeId}`;
        }
    },
    methods: {
        toggleVideoVisible: function (): void {
            this.videoVisible = !this.videoVisible;
        },
    }
});
</script>
