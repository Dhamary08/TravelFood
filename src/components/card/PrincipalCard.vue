<template>
  <div>
    <b-card
      :title="card.title"
      :img-src="card.img"
      :img-alt="card.imgAlt"
      img-top
      class="mb-2"
      tag="article"
      style="min-height: 30rem"
    >
      <b-card-text>
        {{ card.text }}
      </b-card-text>
      <b-card-text class="text-center">
        <h4 class="bold">${{ card.value }}</h4>
      </b-card-text>
      <div class="d-flex justify-content-center align-items-center">
        <b-button href="#" variant="primary">+</b-button>
        <b-button href="#" variant="secundary">-</b-button>
      </div>
      <template #footer>
        <div class="d-flex justify-content-between">
          <b-button href="#" variant="secundary">Detalle</b-button>
          <b-button href="#" variant="primary">Agregar</b-button>
        </div>
      </template>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    card: Object,
  },
};
</script>
