<template>
  <div>
    <header-nav @open-view="changeActiveViews" />
    <div class="container-fluid">
      <div class="row">
        <main class="col-10">
          <div v-if="activeViewName === 'login'" class="mt-5">
            <login-users></login-users>
          </div>
          <div v-if="activeViewName === 'register'" class="mt-5">
            <register-users></register-users>
          </div>
        </main>
      </div>
    </div>
    <footer-nav />
  </div>
</template>
<script>
import HeaderNav from './components/layout/Header-nav.vue';
import LoginUsers from './components/registro/LoginUsers.vue';
import RegisterUsers from './components/registro/RegisterUsers.vue';
import FooterNav from './components/layout/FooterNav.vue';

export default {
  components: {
    HeaderNav,
    LoginUsers,
    RegisterUsers,
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
