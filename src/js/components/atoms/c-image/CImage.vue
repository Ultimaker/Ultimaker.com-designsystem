<template>
    <intersect-observer
        :disconnect-after-intersect="true"
        :root-margin="'100px 0px'"
        @intersecting="intersectingHandler"
    >
        <img
            :alt="alt"
            :sizes="sizes"
            :src="getSrc()"
            :srcset="getSrcset"
            @error="errorHandler"
            @load="loadHandler"
            class="img--contain"
        />
    </intersect-observer>
</template>

<script src="./c-image.ts" lang="ts"></script>
