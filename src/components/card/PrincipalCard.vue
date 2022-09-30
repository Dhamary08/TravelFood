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
        <b-button href="#" variant="link" @click="$emit('modal-detail', card.id)">
          Detalle
        </b-button>
      </div>
      <template #footer>
        <div class="d-flex justify-content-between">
          <b-button href="#" variant="link" @click="deleteSelect" v-if="valueProduct > 0">
            Eliminar
          </b-button>
          <b-button
            href="#"
            variant="primary"
            @click="countProduct"
            block
            :disabled="card.stock <= valueProduct"
          >
            Agregar
            <b-badge pill href="#" variant="light" v-if="valueProduct > 0" class="mx-1">
              {{ valueProduct }}
            </b-badge>
          </b-button>
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
  data() {
    return {
      valueProduct: 0,
    };
  },
  methods: {
    countProduct() {
      this.valueProduct += 1;
      this.$emit('add-cart', this.card.id, this.valueProduct);
    },
    deleteSelect() {
      this.valueProduct -= 1;
      this.$emit('delete-cart', this.card.id, this.valueProduct);
    },
    deleteSelectAll() {
      this.valueProduct = 0;
      this.$emit('delete-cart-all', this.card.id);
    },
    disabledStock() {},
  },
};
</script>
