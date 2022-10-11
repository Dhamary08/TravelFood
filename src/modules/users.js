import axios from 'axios';

const URLRegister = 'https://633398bc573c03ab0b5f72a5.mockapi.io/register';

export default {
  namespaced: true,
  state: {
    users: [],
    logged: {},
  },
  mutations: {
    SET_USERS_LIST(state, data) {
      state.users = data;
    },
  },
  actions: {
    async actionsUsers({ commit }) {
      const responseList = await axios
        .get(URLRegister)
        .then((response) => {
          console.log(response.data);
          commit('SET_USERS_LIST', response.data);
          return response.data;
        })
        .catch((error) => {
          console.log(`${error}`);
        });
      return responseList;
    },
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getLogged(state) {
      return state.logged;
    },
  },
};
