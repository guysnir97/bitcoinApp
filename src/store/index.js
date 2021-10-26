import Vue from 'vue';
import Vuex from 'vuex';
import contactModule from '@/store/modules/user.module';
Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    getters: {

    },

    mutations: {

    },
    actions: {

    },
    modules: {
        contactModule
    }
});