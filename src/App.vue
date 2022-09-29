<template>
  <div id="app">
    <header-nav />
    <router-view />
    <footer-nav class="footer" />
  </div>
</template>
<script>
import HeaderNav from './components/layout/Header-nav.vue';
import FooterNav from './components/layout/FooterNav.vue';

export default {
  components: {
    HeaderNav,
    FooterNav,
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
