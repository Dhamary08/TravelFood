export default {
  state: {
    logged: {
      email: 'admin@admin.com',
      name: 'admin',
      password: 'admin123',
      admin: true,
      id: '1',
    },
  },
  getters: {
    getUser(state) {
      return state.logged;
    },
    getAdmin(state) {
      return state.logged.admin;
    },
  },
  mutations: {},
  actions: {},
};
