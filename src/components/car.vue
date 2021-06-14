<template lang="pug">
  div
    h1 car id {{ id }}
    button.btn(@click="goBackToCars") Back
    br
    button.btn
    router-link(class="btn"
      tag="button"
      :to="{name: 'carFull', params: {id: id}, query: {name: 'Mazda', year: 2000}, hash: '#scroll'}"
      ) Full info
    hr
    router-view
</template>

<script>
export default {
  data () {
    return {
      id: this.route.params['id']
    }
  },
  methods: {
    goBackToCars () {
      this.$router.push('/honda')
    }
  },
  watch: {
    $route (toR, fromR) {
      this.id = toR.params['id']
    }
  }
}
</script>

<style scoped>
  p {
    color: #363636;
  }
  a {
    color: green;
  }
</style>
