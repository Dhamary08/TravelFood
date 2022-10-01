<template>
  <div class="fcc my-5">
    <vue-form :state="formState" @submit="submit()" class="d-flex">
      <b-container>
        <b-row align-h="center">
          <b-col class="bg-info form-container" cols="4">
            <b-row align-h="center" class="p-5">
              <b-col cols="12" class="d-row">
                <h3 class="mb-4 text-center text-light">Registro</h3>
                <!-- NOMBRE COMPLETO -->
                <validate tag="label" :custom="{ validator: fullNameValidator }">
                  <div class="input-group mb-3">
                    <label for="name" class="d-flex flex-column text-left text-light">
                      Nombre
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          <b-icon-person-circle />
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          v-model="model.name"
                          name="name"
                          required
                        />
                      </div>
                    </label>
                    <field-messages>
                      <div slot="validator" class="small text-light bg-dark rounded px-2">
                        Nombre es obligatorio
                      </div>
                    </field-messages>
                  </div>
                </validate>
              </b-col>
              <b-col cols="12">
                <validate tag="label" :custom="{ validator: nicknameValidator }">
                  <div class="input-group mb-3">
                    <label for="nickname" class="d-flex flex-column text-left text-light">
                      Apodo
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          <b-icon-person-bounding-box />
                        </span>
                        <input
                          type="text"
                          v-model="model.nickname"
                          class="form-control"
                          name="nickname"
                          required
                        />
                      </div>
                    </label>
                    <field-messages>
                      <div slot="validator" class="small text-light bg-dark rounded px-2">
                        El apodo es obligatorio, sólo letras y números
                      </div>
                    </field-messages>
                  </div>
                </validate>
              </b-col>
              <b-col cols="12">
                <validate tag="label" :custom="{ validator: mailValidator }">
                  <div class="input-group mb-3">
                    <label for="email" class="d-flex flex-column text-left text-light">
                      Correo Electrónico
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          <b-icon-envelope />
                        </span>
                        <input
                          type="email"
                          v-model="model.email"
                          name="email"
                          class="form-control"
                          required
                        />
                      </div>
                    </label>
                    <field-messages>
                      <div slot="validator" class="small text-light bg-dark rounded px-2">
                        El correo es obligatorio example@mail.com
                      </div>
                    </field-messages>
                  </div>
                </validate>
              </b-col>
              <b-col cols="12">
                <validate tag="label" :custom="{ validator: passwordValidator }">
                  <div class="input-group mb-3">
                    <label for="password" class="d-flex flex-column text-left text-light">
                      Contraseña
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          <b-icon-shield-lock />
                        </span>
                        <input
                          type="password"
                          v-model="model.password"
                          class="form-control"
                          name="password"
                          required
                        />
                      </div>
                    </label>
                    <field-messages>
                      <div class="small text-success bg-dark rounded px-2">Correcto</div>
                      <div slot="validator" class="small text-light bg-dark rounded px-2">
                        La Contraseña tienen que ser mayor a 8 caracteres y contener
                        números
                      </div>
                    </field-messages>
                  </div>
                </validate>
              </b-col>
              <!-- <b-col cols="12">
                <validate tag="label" :custom="{ validator: passwordRepetValidator }">
                  <div class="input-group mb-3">
                    <label for="password" class="d-flex flex-column text-left text-light">
                      Repetir Contraseña
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          <b-icon-shield-lock />
                        </span>
                        <input
                          type="password"
                          v-model="model.passwordRepet"
                          class="form-control"
                          name="passwordRepet"
                          required
                        />
                      </div>
                    </label>
                    <field-messages>
                      <div class="small text-success bg-dark rounded px-2">Correcto</div>
                      <div slot="validator" class="small text-light bg-dark rounded px-2">
                        Las contraseña tienen que ser iguales
                      </div>
                    </field-messages>
                  </div>
                </validate>
              </b-col> -->
              <b-col cols="12">
                <validate tag="label" :custom="{ validator: termsValidator }">
                  <label for="terms" class="d-flex text-left">
                    <input
                      type="checkbox"
                      v-model="model.terms"
                      name="terms"
                      class="mr-2"
                    />
                    Acepta términos y condiciones
                  </label>
                  <field-messages>
                    <div class="text-success small">Correcto</div>
                    <div slot="validator" class="small text-light bg-dark rounded px-2">
                      <a href="#" class="text-success"> Leer aqui</a>
                    </div>
                  </field-messages>
                </validate>
              </b-col>
              <b-col cols="12">
                <button class="btn btn-primary my-3" block type="submit">Enviar</button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </vue-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formState: {},
      model: {
        name: '',
        password: '',
        email: '',
        terms: false,
        nickname: '',
        passwordRepet: '',
      },
      urlSentUsers: 'https://633398bc573c03ab0b5f72a5.mockapi.io/register',
    };
  },
  methods: {
    fullNameValidator: (value) => {
      let response = false;
      if (/^[a-zA-Z ñÑáéíóúÁÉÍÓÚ]*$/.test(value)) {
        response = true;
      }
      return response;
    },
    nicknameValidator: (value) => {
      let response = false;
      if (!/[^a-zA-Z0-9]/.test(value)) {
        response = true;
      }
      if (value.length < 4) {
        response = false;
      }
      return response;
    },
    passwordValidator: (value) => {
      let response = false;
      if (/[0-9]/g.test(value) && value.length > 8) {
        response = true;
      }
      return response;
    },
    /*  passwordRepetValidator: (value) => {
      let response = false;
      const pass = this.model.password;
      if (value === pass) {
        response = true;
      }
      return response;
    }, */
    mailValidator: (value) => {
      let response = false;
      if (value.includes('@') && value.includes('.com')) {
        response = true;
      }
      return response;
    },
    termsValidator: (value) => value,
    submit() {
      if (this.formState.$invalid) {
        this.$bvToast.toast('Error al enviar el formulario', {
          title: 'Alerta',
          autoHideDelay: 5000,
          variant: 'warning',
        });
      } else {
        this.sentNewUsers();
        this.$bvToast.toast('Formulario enviado con éxito', {
          title: 'Mensaje',
          autoHideDelay: 5000,
          variant: 'success',
        });
        this.$emit('sent-form', this.model);
      }
    },
    async sentNewUsers() {
      await this.axios
        .post(this.urlSentUsers, {
          name: this.model.name,
          email: this.model.email,
          password: this.model.password,
          username: this.model.nickname,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(`${error}`);
        });
    },
  },
};
</script>

<style scoped>
.form-container {
  border-radius: 1rem;
}
</style>
