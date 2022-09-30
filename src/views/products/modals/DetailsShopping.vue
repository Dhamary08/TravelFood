<template>
  <div>
    <p class="text-center bold">Detalle de compra</p>
    <table-simple :productList="itemSelectList" :fields="fieldsList" />
    <b-button href="#" variant="primary" block>Pagar {{ finalValue }}</b-button>
    <b-button href="#" variant="secundary" block @click="deleteProductAll">
      Reiniciar pedido
    </b-button>
  </div>
</template>

<script>
import TableSimple from '../../../components/table/TableSimple.vue';

export default {
  props: { itemSelectList: Array, finalValue: String },
  components: { TableSimple },
  data() {
    return {
      fieldsList: [
        { key: 'nameProduct', label: 'Producto' },
        { key: 'quantity', label: 'Cantidad' },
        { key: 'subTotal', label: 'Sub total' },
        { key: 'delete', label: '' },
      ],
    };
  },
  methods: {
    deleteProductAll() {
      this.$emit('delete-product-all');
    },
  },
};
</script>
