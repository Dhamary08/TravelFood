export default {
  state: {
    logged: {
      email: '',
      password: 'admin123',
      userAdmin: true,
      userClient: false,
      id: '1',
    },
  },
  mutations: {},
  actions: {},
  getters: {
    getUser(state) {
      return state.logged;
    },
    getAdmin(state) {
      return state.logged.admin;
    },
  },
};
