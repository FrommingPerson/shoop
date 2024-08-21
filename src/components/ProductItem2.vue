<script>
import {defineComponent} from 'vue'
// import eventBus from "@/eventBus";

export default defineComponent({
  name: "ProductItem2",
  props: ["products"],
  data() {
    return {
      colour: "#73B6EA"
    }
  },
  methods: {
    // gotoPage(pageNumbers, pageParams) {
    //   eventBus.$emit("gotoPage", pageNumbers, pageNumbers);
    // }
  }
})
</script>

<template>
  <ul class="catalog__list">
    <li class="catalog__item">
      <!--        "v-bind:key" there is for determining element from array by means of index it's require because solve problems with determining the certain element of array-->
      <a class="catalog__pic" href="#" @click.prevent="$emit('gotoPage', 'product', {id: products.id})">
        <img :src="products.path_to_img" :alt="products.title">
      </a>

      <h3 class="catalog__title">
        <a href="#">
          {{products.title}}
        </a>
      </h3>

      <span class="catalog__price">
              {{`${products.price} руб`}}
            </span>

      <ul class="colors colors--black">
        <li class="colors__item">
          <label class="colors__label">
            <input class="colors__radio sr-only" type="radio"  value="#73B6EA" v-model = "colour">
            <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
          </label>
        </li>
        <li class="colors__item">
          <label class="colors__label">
            <input class="colors__radio sr-only" type="radio"  value="#8BE000" v-model = "colour">
            <span class="colors__value" style="background-color: #8BE000;">
                  </span>
          </label>
        </li>
        <li class="colors__item">
          <label class="colors__label">
            <input class="colors__radio sr-only" type="radio"  value="#222" v-model = "colour">
            <span class="colors__value" style="background-color: #222;">
                  </span>
          </label>
        </li>
      </ul>
    </li>
  </ul>
</template>


