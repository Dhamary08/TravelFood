<template>
  <div>
    <b-table striped hover :items="productList" :fields="fields" />
  </div>
</template>

<script>
export default {
  props: {
    productList: Array,
    fields: Array,
  },
};
</script>
