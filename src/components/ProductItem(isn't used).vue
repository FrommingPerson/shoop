<script setup>
defineProps({
  nameElement: [],
});
</script>

<template>
  <ul class="catalog__list">
    <li class="catalog__item">
      <!--        "v-bind:key" there is for determining element from array by means of index it's require because solve problems with determining the certain element of array-->
      <a class="catalog__pic" href="#">
        <img :src="nameElement[0].path_to_img" :alt="nameElement[0].title">
      </a>

      <h3 class="catalog__title">
        <a href="#">
          {{nameElement[0].title}}
        </a>
      </h3>

      <span class="catalog__price">
              {{`${nameElement[0].price} руб`}}
            </span>

      <ul class="colors colors--black">
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
    </li>
  </ul>
</template>

<style scoped>

</style>
