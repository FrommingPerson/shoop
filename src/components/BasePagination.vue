<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BasePagination",
  model: {
    prop: "page",
    event: "paginate",
  },
  props: ["page", "count", "perPage"],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    }
  },
  methods: {
    paginate(page) {
      let digitPages = Math.ceil(this.count / this.perPage);
      switch (page) {
        case digitPages + 1:
          page = page - 1;
          break;
        case 0:
          page = page + 1;
          break;
      }
      this.$emit("paginate", page);
    },
  }
})
</script>

<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow pagination__link--disabled" href="#" v-on:click.prevent = "paginate(page - 1)" aria-label="Предыдущая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key = "pageNumber">
      <a href="#" v-on:click.prevent = "paginate(pageNumber)" class="pagination__link" :class="{'pagination__link--current': pageNumber === page}">
        {{pageNumber}}
      </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow" href="#" v-on:click.prevent = "paginate(page + 1)" aria-label="Следующая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<style scoped>

</style>