<template>
  <div class="form-login mt-5">
    <vue-form :state="formState" @submit.prevent="submit()" class="d-flex">
      <b-container>
        <b-row align-h="center">
          <b-col class="bg-info form-container" cols="5">
            <b-row align-h="center" class="p-5">
              <b-col cols="12" class="d-row">
                <h3 class="mb-4 text-center text-light">Ingreso</h3>
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
                          v-model="email"
                          name="email"
                          class="form-control"
                          required
                          placeholder="admin@admin.com"
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
                          v-model="password"
                          class="form-control"
                          name="password"
                          placeholder="123123123"
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
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      password: '',
      email: '',
      userList: [],
      URLlogin: 'https://633398bc573c03ab0b5f72a5.mockapi.io/login',
      formState: {},
    };
  },
  methods: {
    ...mapActions('users', ['actionsUsers']),
    async getPersonRegister() {
      this.userList = await this.actionsUsers();
    },
    async postPersonRegister() {
      await this.axios
        .post(this.URLlogin, {
          email: this.email,
          password: this.password,
          dataEnter: new Date(),
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(`${error}`);
        });
    },
    async submit() {
      if (this.formState.$invalid) {
        this.$bvToast.toast('Recuerde ingresar sus credenciales', {
          title: 'Importante',
          variant: 'warning',
          toaster: 'b-toaster-bottom-right',
          solid: true,
          autoHideDelay: 5000,
        });
      } else if (this.formState.$valid) {
        await this.postPersonRegister();
        await this.getPersonRegister();
        this.$bvToast.toast('Formulario enviado con éxito', {
          title: 'Mensaje',
          autoHideDelay: 5000,
          variant: 'success',
        });
        this.password = '';
        this.email = '';
      }
    },
    passwordValidator: (value) => {
      let response = false;
      if (/[0-9]/g.test(value) && value.length > 8) {
        response = true;
      }
      return response;
    },
    mailValidator: (value) => {
      let response = false;
      if (value.includes('@') && value.includes('.com')) {
        response = true;
      }
      return response;
    },
  },
  computed: {
    ...mapState('users', ['users', 'logged']),
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
