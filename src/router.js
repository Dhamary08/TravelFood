import Vue from 'vue';
import VueRouter from 'vue-router';
import PrincipalPage from './views/PrincipalPage.vue';
import MyProducts from './views/products/MyProducts.vue';
import LoginUsers from './views/registro/LoginUsers.vue';
import RegisterUsers from './views/registro/RegisterUsers.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: PrincipalPage,
  },
  {
    path: '/productos',
    name: 'productos',
    component: MyProducts,
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: LoginUsers,
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegisterUsers,
  },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
