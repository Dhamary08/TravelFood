<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Travel Food</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/productos" active>
            <router-link to="/productos" class="py-0 nav-link text-light">
              <b-icon icon="shop" aria-hidden="true" />
              Producto
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" active>
            <router-link to="/registro" class="py-0 nav-link text-light">
              <b-icon icon="person-plus" aria-hidden="true" />
              Registro
            </router-link>
          </b-nav-item>
          <b-nav-item href="#" active>
            <router-link to="/ingreso" class="py-0 nav-link text-light">
              <b-icon icon="person-circle" aria-hidden="true" />
              Ingreso
            </router-link>
          </b-nav-item>
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>Nombre Usuario</em>
            </template>
            <b-dropdown-item href="#">Mi perfil</b-dropdown-item>
            <b-dropdown-item href="#">Cerrar Sesión</b-dropdown-item>
          </b-nav-item-dropdown>
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
