<template>
  <div class="form-login">
    <b-form class="bg-login">
      <h2 class="text-center">Ingreso</h2>
      <b-form-input
        type="email"
        id="email"
        placeholder="Ingrese su correo"
        class="my-3"
      />
      <b-form-input
        type="password"
        id="password"
        placeholder="Ingrese su contraseña"
        class="my-3"
        v-model="password"
      />
      <b-button variant="primary" class="mt-3" @click="sentLogin">Guardar</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: '',
      email: '',
    };
  },
  methods: {
    sentLogin() {
      if (this.password === '' || this.email === '') {
        this.$bvToast.toast('Recuerde ingresar sus credenciales', {
          title: 'Importante',
          variant: 'warning',
          toaster: 'b-toaster-bottom-right',
          solid: true,
          autoHideDelay: 5000,
        });
      }
    },
  },
};
</script>
<style scoped>
.form-login {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-login {
  padding: 3rem;
  background-color: #8fd485;
  border-radius: 1rem;
}
</style>
