<template lang="pug">
  .nissan
    h2 List
    input(type="text" v-model="searchName")
    ul
      li(v-for="name of filteredNames") {{ name }}
</template>

<script>
import ListMixin from '../listMixin'
export default {
  mixins: [ListMixin]
}
</script>

<style lang="stylus" scoped>
  .nissan
    border 5px solid darkgreen
</style>
