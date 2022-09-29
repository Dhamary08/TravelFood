<template>
  <div class="container-fluid">
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
      cardList: [],
      cartShopping: [],
      openModalDetail: false,
      detailModal: {},
      urlProduct: 'https://633398bc573c03ab0b5f72a5.mockapi.io/products',
    };
  },
  methods: {
    async getProducts() {
      await this.axios
        .get(this.urlProduct)
        .then((response) => {
          console.log(response.data);
          this.cardList = response.data;
        })
        .catch((error) => {
          console.log(`${error}`);
        });
    },
    /* metodo fetch
    fetch(this.urlProduct)
        .then((response) => response.json())
        .then((data) => {
          this.cardList = data;
        })
        .catch((error) => console.log(`${error}`))
        .finally(() => {
          console.log('Finalizo con éxito');
        })
   */
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
  created() {
    this.getProducts();
  },
};
</script>
