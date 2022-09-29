<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Travel Food</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" active>
            <router-link to="/productos">
              <b-icon icon="shop" aria-hidden="true" />
              Productos
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" active>
            <router-link to="/ingreso">
              <b-icon icon="person-circle" aria-hidden="true"></b-icon>
              Ingreso
            </router-link>
          </b-nav-item>
          <b-nav-item href="#" active>
            <router-link to="/registro">
              <b-icon icon="person-plus" aria-hidden="true"></b-icon>
              Registro
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    view(data) {
      this.$emit('open-view', data);
    },
  },
};
</script>
