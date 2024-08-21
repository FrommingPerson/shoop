<script>
import MainPage from "@/pages/MainPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import {defineComponent} from "vue";
import products from "@/components/data/products";

export default defineComponent({
  name: "App",
  data() {
    return {
      currentPage: 'main',
      currentPageParams: {},
    }
  },
  computed: {
    currentPageComponent() {
      return routs[this.currentPage] || "";
    }
  },
  methods: {
    gotoPage (pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams;
    }
  },
  components: {MainPage, ProductPage, NotFoundPage},
})

const routs = {
  main: "MainPage",
  product: "ProductPage",
}
</script>

<template>
<!--  <main-page v-if="currentPage === 'main'"/>-->
<!--  <product-page v-else-if="currentPage === 'product'"/>-->
<!--  <not-found-page if="currentPage !=='main' || currentPage !=='product'"/>-->

  <component :is="currentPageComponent" :page-params="currentPageParams" @gotoPage="(pageName, pageParams) => gotoPage(pageName, pageParams)"/>
</template>
