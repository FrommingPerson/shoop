<script setup>
import ProductItem2 from "@/components/ProductItem2.vue";
//an irrational move why have I done it??? If it better be in the main file
defineProps({
  products: [],
});
</script>

<template>
  <ul class="catalog__list">
    <product-item2 v-for="(product, index) in products" :key = "product.id" :products = "product" @gotoPage="(pageName, pagaParams) => $emit('gotoPage', pageName, pagaParams)"></product-item2>
  </ul>
</template>
