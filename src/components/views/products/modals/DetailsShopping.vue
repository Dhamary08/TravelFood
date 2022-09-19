<template>
  <div>
    <p class="text-center bold">Detalle de compra</p>
    <table-simple :productList="itemSelectList" :fields="fieldsList" />
    <b-button href="#" variant="primary" block>Pagar</b-button>
    <b-button href="#" variant="secundary" block>Reiniciar pedido</b-button>
  </div>
</template>

<script>
import TableSimple from '../../../table/TableSimple.vue';

export default {
  components: { TableSimple },
  data() {
    return {
      fieldsList: [
        { key: 'nameProduct', label: 'Producto' },
        { key: 'quantity', label: 'Cantidad' },
        { key: 'subTotal', label: 'Sub total' },
        { key: 'delete', label: '' },
      ],
      itemSelectList: [
        {
          nameProduct: 'Dickerson',
          quantity: '6',
          subTotal: '600',
          delete: 'si',
        },
        {
          nameProduct: 'Larsen',
          quantity: '8',
          subTotal: '600',
          delete: 'si',
        },
        {
          nameProduct: 'Geneva',
          quantity: '9',
          subTotal: '600',
          delete: 'si',
        },
        {
          nameProduct: 'Jami',
          quantity: '10',
          subTotal: '600',
          delete: 'si',
        },
      ],
    };
  },
};
</script>
