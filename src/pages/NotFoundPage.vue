<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NotFoundedPage",
  data() {
    return {
      currentPage: '',
    }
  },
})
</script>

<template>
<h1>The page is not found</h1>
</template>

<style scoped>
h1 {
  color: #2c3e50;
  font-size: 25px;
}
</style>