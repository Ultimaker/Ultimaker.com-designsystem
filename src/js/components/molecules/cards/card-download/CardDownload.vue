<template>
    <div class="card-download">
        <input type="radio"
               :id="id"
               :name="name"
               :checked="selected"
               :value="file"
               class="card-download__radio"
               @change="handleSelect" />
        <label class="card-download__label" :for="id">
            <div class="card-download__image-wrapper">
                <c-image v-bind="image" v-if="image" />
            </div>
            <div class="card-download__content">
                <h4 class="card-download__title">{{ title }}</h4>
                <p class="card-download__desc" v-if="description">{{ description }}</p>
            </div>
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import v5 from '../../../../utils/uuid';

    export default Vue.component('CardDownload', {
        props: {
            name: {
                type: String,
                required: true,
            },
            selected: {
                type: Boolean,
                required: true,
            },
            index: {
                type: Number,
                required: true,
            },
            setSelectedItem: {
                type: Function,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            file: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            image: {
                type: Object,
                required: false,
            },
        },
        computed: {
            id(): string {
                return v5();
            }
        },
        methods: {
            handleSelect() {
                this.setSelectedItem(this.index);
            }
        }
    });
</script>
