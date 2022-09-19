<template>
  <div class="form-register">
    <b-form class="bg-register">
      <b-form-group id="input-group-1" label="Correo Electrónico:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="example@mail.com"
          required
        />
      </b-form-group>

      <b-form-group id="input-2" label="Ingresa tu nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Nombre y Apellido"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-3" label="Ingresa tu contraseña:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.key"
          required
          placeholder="Ingresa tu contraseña"
        ></b-form-input>
      </b-form-group>
      <div class="d-flex justify-content-between">
        <b-button type="reset" variant="secundary">
          <b-icon-backspace></b-icon-backspace>
          Salir
        </b-button>
        <b-button type="submit" variant="primary">Enviar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        key: '',
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.key = '';
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
.form-register {
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-register {
  padding: 3rem;
  background-color: #8fd485;
  border-radius: 1rem;
}
</style>
