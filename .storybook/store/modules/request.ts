import { TLSSocket } from 'tls';
import { ActionTree, MutationTree } from 'vuex';
import { RootState } from '../index';

export const name = 'request';
export const namespaced = true;

interface RequestState {
    headers: {};
    protocol: null | string;
    url: null | string;
}

export const state = (): RequestState => ({
    headers: {},
    protocol: null,
    url: null,
});

export const mutations: MutationTree<RequestState> = {
    setHeaders (state: RequestState, headers: {}): void {
        state.headers = headers;
    },

    setProtocol (state: RequestState, connection: TLSSocket): void {
        state.protocol = connection.encrypted ? 'https' : 'http';
    },

    setUrl (state: RequestState, url: string): void {
        state.url = url;
    },
};

export const actions: ActionTree<RequestState, RootState> = {
    SET_HEADERS ({ commit }, headers:{}): void {
        commit('setHeaders', headers);
    },

    SET_PROTOCOL ({ commit }, connection: TLSSocket): void {
        commit('setProtocol', connection);
    },

    SET_URL ({ commit }, url: string): void {
        commit('setUrl', url);
    },
};
