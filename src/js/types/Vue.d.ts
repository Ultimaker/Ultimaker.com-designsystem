// augment the types of Vue.js
import Vue from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        $emitPublic: Function;
        $onPublic: Function;
        $offPublic: Function;
        $route: {
            fullPath: string;
        };
    }
}
