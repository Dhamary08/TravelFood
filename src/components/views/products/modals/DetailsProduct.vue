<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col col lg="12">
        <h4 class="my-4 text-center">{{ detailModal.title }}</h4>
      </b-col>
      <b-col col lg="12">
        <img :src="detailModal.img" :alt="detailModal.imgAlt" class="d-flex mx-auto" />
      </b-col>
      <b-col col lg="10">
        <p class="text-center">Intensidad: {{ detailModal.calification }}</p>
        <div class="d-flex my-5">
          <b-button
            v-for="(item, index) in detailModal.principalIngredients"
            :key="index"
            size="sm"
            class="mx-1"
            variant="outline-primary"
            pill
          >
            <span class="small">{{ item }} </span>
          </b-button>
        </div>
        <p class="text-center">Popularidad: {{ detailModal.popular }} / 5 ⭐</p>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: {
    detailModal: Object,
  },
};
</script>
<style scoped>
img {
  width: 17rem;
}
</style>
