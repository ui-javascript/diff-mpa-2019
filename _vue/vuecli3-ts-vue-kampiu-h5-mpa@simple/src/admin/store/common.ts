import { Module, GetterTree, MutationTree, ActionTree } from 'vuex'
import { RootStateTypes } from '@/admin/store/type'

// 声明state ， 如果是对象或者是数组需要另外对接接口
// export interface State {
//     router: String
// }
// // state

export interface CommonStateTypes {
    router: string;
}

const state: CommonStateTypes = {
    router: ''
};

// @ts-ignore
const getters: GetterTree<CommonStateTypes , RootStateTypes > = {
    router(state) : string {
        return state.router
    },
}

const mutations: MutationTree<CommonStateTypes> = {
    INIT_ROUTER(state: CommonStateTypes, data: string) {
        state.router = data;
    }
}

const actions: ActionTree<CommonStateTypes, any> = {
    // SET_AUTHOR_ASYN({ commit, state: CommonStateTypes}, data: string) {
        // commit('SET_AUTHOR', data);
    // }
}

const namespaced: boolean = true;

export const common: Module<CommonStateTypes, RootStateTypes> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};

