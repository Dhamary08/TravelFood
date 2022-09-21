<template>
  <div class="form-login">
    <b-form class="bg-login">
      <h2 class="text-center">Registro</h2>
      <b-input-group prepend="💪" class="mb-2 mr-sm-2 mb-sm-0 my-4">
        <b-form-input type="text" id="username" placeholder="Ingrese su usuario" />
      </b-input-group>
      <b-input-group prepend="📧" class="mb-2 mr-sm-2 mb-sm-0 my-4">
        <b-form-input
          type="email"
          id="email"
          placeholder="Ingrese su correo"
          v-model="email"
          :state="validationEmail"
        />
      </b-input-group>
      <b-form-invalid-feedback :state="validationEmail" v-if="email !== ''">
        example@mail.com
      </b-form-invalid-feedback>
      <b-input-group prepend="🔒" class="mb-2 mr-sm-2 mb-sm-0 my-4">
        <b-form-input
          type="password"
          id="password"
          placeholder="Ingrese su contraseña"
          v-model="password"
          :state="validationPassword"
        />
      </b-input-group>
      <b-form-invalid-feedback :state="validationPassword" v-if="password !== ''">
        Recuerda que la contraseña tiene que tener entre 5 a 12 caracteres.
      </b-form-invalid-feedback>
      <b-input-group prepend="🔒" class="mb-2 mr-sm-2 mb-sm-0 my-4">
        <b-form-input
          type="password"
          id="repitPassword"
          placeholder="Repita contraseña"
          v-model="repitPassword"
          :state="validationRepetPassword"
        />
      </b-input-group>
      <b-form-invalid-feedback
        :state="validationRepetPassword"
        v-if="repitPassword !== ''"
      >
        Recuerda que las contraseñas tienen que iguales.
      </b-form-invalid-feedback>
      <div class="d-flex justify-content-between">
        <b-button variant="link" class="mt-3 text-light"
          >Retroceder</b-button
        >
        <b-button variant="primary" class="mt-3">Guardar</b-button>
      </div>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: '',
      repitPassword: '',
      email: '',
      username: '',
    };
  },
  computed: {
    validationPassword() {
      return this.password.length > 4 && this.password.length < 13;
    },
    validationRepetPassword() {
      return this.password === this.repitPassword && this.repitPassword !== '';
    },
    validationEmail() {
      return this.email.includes('@') && this.email !== '';
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
p {
  padding: 0;
  margin: 0;
}
</style>
