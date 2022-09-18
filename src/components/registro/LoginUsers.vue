<template>
  <div class="form-login">
    <b-form class="bg-login">
      <h2 class="text-center">Ingreso</h2>
      <b-form-input
        id="inline-form-input-name"
        placeholder="Ingrese su correo"
        class="my-3"
      />

      <b-form-input
        type="password"
        id="text-password"
        aria-describedby="password-help-block"
        placeholder="Ingrese su contraseña"
        class="my-3"
      />

      <b-button variant="primary" class="">Save</b-button>
    </b-form>
  </div>
</template>
<script></script>
<style scoped>
.form-login {
  width: 100%;
  /* height: 100%; */
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
