<script setup>
// import products from "./components/data/products"
import ProductItem2 from "@/components/ProductItem2.vue";
//irrational moves why have I done it??? If it better be in the main file
defineProps({
  products: [],
});
</script>

<template>
  <ul class="catalog__list">
    <product-item2 v-for="(product, index) in products" :key = "product.id" :products = "product"></product-item2>

<!--    <li class="catalog__item" v-for="(product, index) in products" :key = "index">
      &lt;!&ndash;        "v-bind:key" there is for determining element from array by means of index it's require because solve problems with determining the certain element of array&ndash;&gt;
      <a class="catalog__pic" href="#">
        <img :src="product.path_to_img" :alt="product.title">
      </a>

      <h3 class="catalog__title">
        <a href="#">
          {{product.title}}
        </a>
      </h3>

      <span class="catalog__price">
              {{`${product.price} руб`}}
            </span>

      <ul class="colors colors&#45;&#45;black">
        <li class="colors__item">
          <label class="colors__label">
            <input class="colors__radio sr-only" type="radio" name="color-1" value="#73B6EA" checked="">
            <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
          </label>
        </li>
        <li class="colors__item">
          <label class="colors__label">
            <input class="colors__radio sr-only" type="radio" name="color-1" value="#8BE000">
            <span class="colors__value" style="background-color: #8BE000;">
                  </span>
          </label>
        </li>
        <li class="colors__item">
          <label class="colors__label">
            <input class="colors__radio sr-only" type="radio" name="color-1" value="#222">
            <span class="colors__value" style="background-color: #222;">
                  </span>
          </label>
        </li>
      </ul>
    </li>-->
  </ul>
</template>

<style scoped>

</style>