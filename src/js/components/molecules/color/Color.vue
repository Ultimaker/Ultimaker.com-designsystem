<template>
    <div class="color" tabindex="0">
        <div class="color__spec color__spec--show">
            <icon class="color__icon" icon-name="show" :style="styleIcon" />
        </div>
        <div class="color__spec color__spec--swatch" :style="styleBackground"></div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Color as ColorUtil } from 'utils/color';

    export default Vue.component('Color', {
        props: {
            rgbHex: {
                type: String,
                required: true,
            },
            opacity: {
                type: Number,
                required: true,
            },
        },
        computed: {
            styleBackground(): object {
                const styles:{[key: string]: any} = {};

                styles.background = this.color;
                if (this.opacity < 100) {
                    styles.opacity = this.opacity / 100;
                }

                return styles;
            },
            styleIcon(): object {
                const styles:{[key: string]: any} = {};

                styles.color = ColorUtil.lightness(this.color) >= 0.5 ? '#000' : '#FFF';

                return styles;
            },
            color(): string {
                const hexColorNoPrefix = (/^([A-Fa-f0-9]{6})/);
                if (this.rgbHex && this.rgbHex.match && this.rgbHex.match(hexColorNoPrefix)) {
                    return `#${this.rgbHex}`;
                }

                return this.rgbHex;
            }
        }
    });
</script>
