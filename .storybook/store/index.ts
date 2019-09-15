import Vue from 'vue';
import Vuex from 'vuex';
import { sizeEmitter } from './modules/size-emitter';

Vue.use(Vuex);

export function createStore() {
    const store = new Vuex.Store({});

    [sizeEmitter].forEach((module) => {
        module(store);
    });

    return store;
}
