<template>
    <div class="tooltip-toggle">
        <tooltip ref="tooltip" v-show="visible" block="tooltip-toggle"
                 :id="uniqId + '_tooltip'"
                 :class="tooltipClass">
            {{ description }}
        </tooltip>

        <icon-button ref="button"
                     :aria-expanded="visible.toString()"
                     :aria-describedby="uniqId + '_tooltip'"
                     :icon-name="icon"
                     @click.native.prevent="toggleTooltip"
                     @keyup.native.enter="toggleTooltip"
                     @keyup.native.space="toggleTooltip"
                     @keyup.native.esc="hideTooltip"
                     @blur.native.prevent="hideTooltip"
                     button-class="icon-button--transparent icon-button--reversed icon-button--small-icon">
            {{ label }}
        </icon-button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import defaults from '../../../constants/defaults';

    export default Vue.component('TooltipToggle', {
        props: {
            label: {
                type: String,
                required: true,
            },
            icon: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                buildingUnit: defaults.buildingUnit,
                duration: defaults.defaultDuration,
                ease: defaults.defaultEase,
                visible: false,
                tooltipLeft: true,
                yAxisCorrection: 0,
            }
        },
        computed: {
            tooltipClass(): object {
                return {
                    'tooltip--arrow-left': this.tooltipLeft,
                };
            },
        },
        methods: {
            show(): void {
                this.visible = true;
            },
            toggleTooltip(): void {
                if (!this.visible) {
                    this.show();
                } else {
                    this.hide();
                }
            },
            hideTooltip(): void {
                this.hide();
            },
            hide(): void {
                this.visible = false;
            }
        }
    });
</script>
