<template>
  <div>
    <div class="row">
      <div class="col-9">
        <div class="row">
          <div v-for="(item, index) in cardList" :key="index" class="col-3">
            <principal-card
              :card="item"
              :ref="`card${index}`"
              @add-cart="addCart"
              @delete-cart="deleteCart"
              @modal-detail="modalDetail"
            />
          </div>
        </div>
      </div>
      <div class="col-3 bg-white py-5">
        <details-shopping
          class="position-fixed"
          :itemSelectList="cartShopping"
          :finalValue="finalValue"
          @delete-product-all="deleteProductAll"
        />
      </div>
    </div>
    <b-modal
      v-model="openModalDetail"
      scrollable
      hide-footer
      headerClass="p-2 border-bottom-0"
      class="pa-0"
      centered
    >
      <details-product :detailModal="detailModal" />
    </b-modal>
  </div>
</template>

<script>
import PrincipalCard from '../../components/card/PrincipalCard.vue';
import DetailsProduct from './modals/DetailsProduct.vue';
import DetailsShopping from './modals/DetailsShopping.vue';

export default {
  components: { PrincipalCard, DetailsShopping, DetailsProduct },
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
          calification: 3,
          principalIngredients: ['salsa boloñesa', 'carne', 'pastas', 'salsa bechamel'],
          popular: '4.4',
          /* stock:'', */
        },
        {
          id: '2',
          title: 'Ensalada César',
          img: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2018/07/Salsa-cesar-receta-600x338.jpg',
          imgAlt: 'Ensalada cesar',
          text: 'Rica ensalada cesar casera',
          value: 6900,
          calification: 5,
          principalIngredients: ['lechuga', 'pollo', 'salsa cesar', 'queso parmesano'],
          popular: '3.2',
          /* stock:'', */
        },
        {
          id: '3',
          title: 'Spagetti Pesto',
          img: 'https://casadiromavlc.com/wp-content/uploads/2020/01/shutterstock_247682437-adaptada-1080x675.png',
          imgAlt: 'Spagetti al pesto',
          text: 'Rica espagetti con salsa pesto casera',
          value: 8650,
          calification: 4,
          principalIngredients: ['carne', 'pastas', 'salsa pesto', 'albahaca'],
          popular: '5.3',
          /* stock:'', */
        },
        {
          id: '4',
          title: 'Canelones',
          img: 'https://i.ytimg.com/vi/PHsXi21VjFE/maxresdefault.jpg',
          imgAlt: 'canelones',
          text: 'Rica canelones con salsa bolognesa casera',
          value: 8650,
          calification: 5,
          principalIngredients: ['salsa boloñesa', 'carne', 'pastas', 'salsa bechamel'],
          popular: '5.1',
          /* stock:'', */
        },
      ],
      cartShopping: [],
      openModalDetail: false,
      detailModal: {},
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
    deleteProductAll() {
      this.cartShopping = [];
      this.cardList.forEach((_, index) => {
        const value = `card${index}`;
        this.$refs[value][0].deleteSelect();
      });
    },
    deleteCart(id) {
      const deleteProduct = this.cartShopping.some((element) => element.id === id);
      if (deleteProduct) {
        this.cartShopping = this.cartShopping.filter((element) => element.id !== id);
      }
    },
    modalDetail(id) {
      this.detailModal = this.cardList.find((element) => element.id === id);
      this.openModalDetail = true;
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
