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
          <div v-if="activeViewName === 'shoppingCart'" class="mt-5">
            <shopping-cart></shopping-cart>
          </div>
        </main>
      </div>
    </div>
    <footer-nav class="footer"/>
  </div>
</template>
<script>
import HeaderNav from './components/layout/Header-nav.vue';
import LoginUsers from './components/registro/LoginUsers.vue';
import RegisterUsers from './components/registro/RegisterUsers.vue';
import MyProducts from './components/home/MyProducts.vue';
import ShoppingCart from './components/home/ShoppingCart.vue';
import FooterNav from './components/layout/FooterNav.vue';

export default {
  components: {
    HeaderNav,
    LoginUsers,
    RegisterUsers,
    MyProducts,
    ShoppingCart,
    FooterNav,
  },
  data() {
    return {
      activeViewName: '',
    };
  },
  methods: {
    changeActiveViews(data) {
      this.activeViewName = data;
      console.log(this.activeViewName);
    },
  },
};
</script>
<style>
.footer {
  position: fixed;
  bottom: 0px;
  width: 100% ;
}
</style>
