import Vue from 'vue';
import Vuex from 'vuex';

import login from '../modules/login';
import product from '../modules/product';
import shopping from '../modules/shopping';
import users from '../modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    product,
    shopping,
    users,
  },
});
