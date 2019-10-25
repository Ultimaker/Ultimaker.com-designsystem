<template>
    <section class="job-board-frame organism">
        <div class="container">
            <div id="grnhse_app"></div>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('JobBoardFrame', {
        data() {
            return {
                url: 'https://boards.greenhouse.io/embed/job_board/js?for=ultimaker'
            }
        },
        beforeMount(): void {
            const script: HTMLScriptElement = document.createElement('script');
            script.src = this.url;
            script.onload = (): void => {
                // @ts-ignore
                if (window.Grnhse) {
                    // @ts-ignore
                    window.Grnhse.Iframe.load();
                }
            };

            document.body.appendChild(script);
        }
    });
</script>
