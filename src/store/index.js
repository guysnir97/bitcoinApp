import Vue from 'vue';
import Vuex from 'vuex';
import userModule from '@/store/modules/user.module';
import contactModule from './modules/contact.module';
Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        userModule,
        contactModule
    }
});