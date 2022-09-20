<template>
  <div>
    <div class="row">
      <div class="col-9">
        <div class="row">
          <div v-for="(item, index) in cardList" :key="index" class="col-3">
            <principal-card :card="item" @add-cart="addCart" />
          </div>
        </div>
      </div>
      <div class="col-3 bg-white py-5">
        <details-shopping
          class="position-fixed"
          :itemSelectList="cartShopping"
          :finalValue="finalValue"
        />
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
          id: '1',
          title: 'Lasagna',
          img: 'https://tipsparatuviaje.com/wp-content/uploads/2020/03/lasana-comida.jpg',
          imgAlt: 'Lasagna',
          text: 'Rica lasagna casera',
          value: 9600,
        },
        {
          id: '2',
          title: 'Ensalada César',
          img: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2018/07/Salsa-cesar-receta-600x338.jpg',
          imgAlt: 'Ensalada cesar',
          text: 'Rica ensalada cesar casera',
          value: 6900,
        },
        {
          id: '3',
          title: 'Spagetti Pesto',
          img: 'https://casadiromavlc.com/wp-content/uploads/2020/01/shutterstock_247682437-adaptada-1080x675.png',
          imgAlt: 'Spagetti al pesto',
          text: 'Rica espagetti con salsa pesto casera',
          value: 8650,
        },
        {
          id: '4',
          title: 'Canelones',
          img: 'https://i.ytimg.com/vi/PHsXi21VjFE/maxresdefault.jpg',
          imgAlt: 'canelones',
          text: 'Rica canelones con salsa bolognesa casera',
          value: 8650,
        },
      ],
      cartShopping: [],
    };
  },
  methods: {
    addCart(id, quantity) {
      const findProduct = this.cartShopping.some((element) => element.id === id);
      if (findProduct) {
        this.cartShopping = this.cartShopping.map((element) => {
          if (id === element.id) {
            const item = { ...element };
            item.quantity = quantity;
            item.subTotal = `$${element.price * quantity}`;
            item.subTotalNum = element.price * quantity;
            return item;
          }
          return element;
        });
      } else {
        const productSelected = this.cardList.find((element) => element.id === id);
        this.cartShopping.push({
          id,
          nameProduct: productSelected.title,
          quantity,
          price: productSelected.value,
          subTotal: `$${productSelected.value}`,
          subTotalNum: productSelected.value,
          delete: '',
        });
      }
    },
  },
  computed: {
    finalValue() {
      let summaryValueProducts = 0;
      this.cartShopping.forEach((element) => {
        summaryValueProducts += element.subTotalNum;
      });
      return `$ ${summaryValueProducts}`;
    },
  },
};
</script>
