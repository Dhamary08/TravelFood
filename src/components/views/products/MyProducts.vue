<template>
  <div>
    <div class="row">
      <div class="col-9">
        <div class="row">
          <div v-for="(item, index) in cardList" :key="index" class="col-3">
            <principal-card :card="item" />
          </div>
        </div>
      </div>
      <div class="col-3 bg-white py-5">
        <details-shopping class="position-fixed"></details-shopping>
      </div>
    </div>
  </div>
</template>

<script>
import PrincipalCard from '../../card/PrincipalCard.vue';
import DetailsShopping from './modals/DetailsShopping.vue';

export default {
  components: { PrincipalCard, DetailsShopping },
  data() {
    return {
      cardList: [
        {
          title: 'Lasagna',
          img: 'https://tipsparatuviaje.com/wp-content/uploads/2020/03/lasana-comida.jpg',
          imgAlt: 'Lasagna',
          text: 'Rica lasagna casera',
          value: '9600',
        },
        {
          title: 'Ensalada César',
          img: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2018/07/Salsa-cesar-receta-600x338.jpg',
          imgAlt: 'Ensalada cesar',
          text: 'Rica ensalada cesar casera',
          value: '6900',
        },
        {
          title: 'Spagetti Pesto',
          img: 'https://casadiromavlc.com/wp-content/uploads/2020/01/shutterstock_247682437-adaptada-1080x675.png',
          imgAlt: 'Spagetti al pesto',
          text: 'Rica espagetti con salsa pesto casera',
          value: '8650',
        },
        {
          title: 'Canelones',
          img: 'https://i.ytimg.com/vi/PHsXi21VjFE/maxresdefault.jpg',
          imgAlt: 'canelones',
          text: 'Rica canelones con salsa bolognesa casera',
          value: '8650',
        },
      ],
    };
  },
};
</script>
