<template>
    <div class="social-sharing">
        <template v-for="item in items">
            <a :href="url(item)" class="social-sharing__link" target="_blank">
                <span class="social-sharing__text">{{ item.label }}</span>
                <icon :icon-name="item.iconName" class="social-sharing__icon" />
            </a>
        </template>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { generateSocialSharingUrl } from 'utils/generate-social-sharing-url';

    const protocolAndHost = 'https://www.ultimaker.com';

    export default Vue.component('SocialSharing', {
        computed: {
            items() {
                return [
                    {
                        type: 'linkedin',
                        iconName: 'linkedin',
                        label: 'Share on Linkedin',
                    },
                    {
                        type: 'facebook',
                        iconName: 'facebook',
                        label: 'Share on Facebook',
                    },
                    {
                        type: 'twitter',
                        iconName: 'twitter',
                        label: 'Share on Twitter',
                    },
                ];
            }
        },
        methods: {
            url({ type }): string {
                const url = `${protocolAndHost}${this.$route.fullPath}`;

                return generateSocialSharingUrl(url, type);
            }
        },
    });
</script>
