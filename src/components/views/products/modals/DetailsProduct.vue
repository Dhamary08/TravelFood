<template>
  <div>
    <p class="text-center">Detalle de compra</p>
    <table-simple :productList="itemSelectList" :fields="fieldsList" />
    <b-button href="#" variant="primary" block>Pagar</b-button>
    <b-button href="#" variant="secundary" block>Reiniciar pedido</b-button>
  </div>
</template>
