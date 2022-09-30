<template>
  <div class="form-login mt-5">
    <b-form class="bg-login">
      <h2 class="text-center">Registro</h2>
      <b-input-group prepend="💪" class="mb-2 mr-sm-2 mb-sm-0 my-4">
        <b-form-input
          type="text"
          id="username"
          placeholder="Ingrese su usuario"
          v-model="username"
          :state="validationName"
        />
      </b-input-group>
      <b-form-invalid-feedback :state="validationName" v-if="username !== ''">
        Recuerda sólo letras
      </b-form-invalid-feedback>
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
        <b-button variant="primary" class="mt-3" block @click="sentNewUsers">
          Guardar
        </b-button>
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
      name: '',
      urlSentUsers: 'https://633398bc573c03ab0b5f72a5.mockapi.io/register',
    };
  },
  methods: {
    async sentNewUsers() {
      await this.axios
        .post(this.urlSentUsers, {
          name: this.name,
          email: this.email,
          password: this.password,
          username: this.username,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(`${error}`);
        });
    },
    /* FETCH POST
    const sent = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password,
          username: this.username,
        }),
      };
      await fetch(this.urlSentUsers, sent)
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.log(error));
    },
    */
  },
  computed: {
    validationPassword() {
      return this.password.length > 4 && this.password.length < 13;
    },
    validationRepetPassword() {
      return this.password === this.repitPassword && this.repitPassword !== '';
    },
    validationName() {
      let response = false;
      if (/^[a-zA-Z ñÑáéíóúÁÉÍÓÚ]*$/.test(this.username) && this.username.length <= 15) {
        response = true;
      }
      console.log(response);
      return response;
    },
    validationEmail() {
      return this.email.includes('@') && this.email !== '' && this.email.includes('.com');
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
