<script>
import {defineComponent} from 'vue'
import ProductFilter from "@/components/ProductFilter.vue";
import ProductList from "@/components/ProductList.vue";
import BasePagination from "@/components/BasePagination.vue";
import products from "@/components/data/products";

export default defineComponent({
  name: "MainPage",
  components: {BasePagination, ProductList, ProductFilter},
  computed: {
    filteredProducts() {
      let filteredProducts = products;
      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(product => product.price > this.filterPriceFrom);
      }
      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter(product => product.price < this.filterPriceTo);
      }
      if (this.filterCategoriesId && this.filterCategoriesId !== 0) {
        filteredProducts = filteredProducts.filter(product => product.categoriesId === this.filterCategoriesId);
      }
      return filteredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    }
  },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoriesId: 0,

      page: 1,
      productsPerPage: 9,
    }
  },
})
</script>

<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        {{ `${countProducts} товаров`}}
      </span>
    </div>
    <div class="content__catalog">
      <product-filter @update:priceFrom="(event) => {filterPriceFrom = event; console.log(event)}"
                      @update:priceTo="(event) => {filterPriceTo = event; console.log(event)}"
                      @update:categoriesId="(event) => {filterCategoriesId = event; console.log(event)}"
                      :price-from.sync = "filterPriceFrom"
                      :price-to.sync = "filterPriceTo"
                      :categories-id.sync = "filterCategoriesId">
      </product-filter>
      <section class="catalog">
        <ProductList :products="products" @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)"/>
        <BasePagination v-model:page="page" :count="countProducts" :per-page="productsPerPage"  @paginate="(new_page) => {page = new_page}"/>
      </section>
    </div>
  </main>
</template>

<style scoped>

</style>