import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootStateTypes } from './type'
import { common } from './common'

Vue.use(Vuex)


const store: StoreOptions<RootStateTypes> = {
    modules: {
        common,
    },
}

export default new Vuex.Store<RootStateTypes>(store);
