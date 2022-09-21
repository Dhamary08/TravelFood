<template>
  <div>
    <header-nav @open-view="changeActiveViews" />
    <div class="container-fluid">
      <div class="row">
        <main class="col-12">
          <div v-if="activeViewName === 'login'" class="mt-5">
            <login-users></login-users>
          </div>
          <div v-if="activeViewName === 'register'" class="mt-5">
            <register-users></register-users>
          </div>
          <div v-if="activeViewName === 'products'" class="mt-5">
            <my-products></my-products>
          </div>
          <div v-if="activeViewName === 'principalPage'"  class="mt-5">
            <principal-page></principal-page>
          </div>
        </main>
      </div>
    </div>
    <footer-nav class="footer" />
  </div>
</template>
<script>
import HeaderNav from './components/layout/Header-nav.vue';
import LoginUsers from './components/views/registro/LoginUsers.vue';
import RegisterUsers from './components/views/registro/RegisterUsers.vue';
import MyProducts from './components/views/products/MyProducts.vue';
import FooterNav from './components/layout/FooterNav.vue';
import PrincipalPage from './components/views/PrincipalPage.vue';

export default {
  components: {
    HeaderNav,
    LoginUsers,
    RegisterUsers,
    MyProducts,
    FooterNav,
    PrincipalPage,
  },
  data() {
    return {
      activeViewName: 'principalPage',
    };
  },
  methods: {
    changeActiveViews(data) {
      this.activeViewName = data;
    },
  },
};
</script>
<style>
.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>
