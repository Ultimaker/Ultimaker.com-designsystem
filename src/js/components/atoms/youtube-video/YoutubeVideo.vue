<template>
    <div class="youtube-video">
        <iframe v-if="this.loadVideo" :src="this.videoUrl" frameborder="0" allowfullscreen="allowfullscreen" class="youtube-video__frame"></iframe>
    </div>
</template>

<script>
import Vue from 'vue';
import YoutubeConstants from 'constants/youtube';

export default Vue.component('YoutubeVideo', {
    props: {
        videoId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            loadVideo: false,
            videoQuery: 'autoplay=1',
        };
    },
    computed: {
        videoUrl: function() {
            return `${YoutubeConstants.embedUrl}${this.videoId}?${this.videoQuery}`;
        }
    },
    mounted() {
        this.loadVideo = true;
    }
});
</script>
