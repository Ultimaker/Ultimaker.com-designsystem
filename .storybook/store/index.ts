import Vue from 'vue';
import Vuex from 'vuex';

import { actions as requestActions, mutations as requestMutations, state as requestState } from './modules/request';

export interface RootState {}

Vue.use(Vuex);

const request = {
    name: 'request',
    namespaced: true,
    actions: requestActions,
    mutations: requestMutations,
    state: requestState,
};

export function createStore() {
    return new Vuex.Store({
        modules: {
            request
        }
    });
}
