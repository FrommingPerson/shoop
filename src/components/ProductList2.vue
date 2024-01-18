<script>
import {defineComponent} from 'vue'
import ProductItem2 from "@/components/ProductItem2.vue";
export default defineComponent({
  name: "ProductList2",
  components: {ProductItem2},
  props: ["products"],
})
</script>

<template>
  <ul class="catalog__list">
    <product-item2 v-for="(product, index) in products" :key = "product.id" :products = "product"></product-item2>
  </ul>
</template>

<style scoped>

</style>