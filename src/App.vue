<template lang="pug">
  div
    #app
      .nav
        router-link.nav-link.btn(to='/' exact) Home
        router-link.nav-link.btn(to='/honda') Honda
        router-link.nav-link.btn(to='/nissan') Nissan
        router-link.nav-link.btn(to='/toyota') Toyota
        router-link.nav-link.btn(to='/car/1') Car id 1
        router-link.nav-link.btn(to='/car/2') Car id 2
        router-link.nav-link.btn(to='/car/3') Car id 3
        router-link.nav-link.btn(to='/car/4') Car id 4
        router-link.nav-link.btn(to='/car/5') Car id 5
      .content
        router-view
</template>

<script>
import honda from './components/honda'
import nissan from './components/nissan'
import ListMixin from './listMixin.js'
import email from './components/email'

export default {
  mixins: [ListMixin],
  filters: {
    lowercase (value) {
      return value.toLowerCase()
    }
  },
  name: 'App',
  props: ['originCountry', 'producedYear'],
  components: {
    appHonda: honda,
    appNissan: nissan,
    appEmail: email
  },
  data () {
    return {
      visible: true,
      title: 'HeaderSM',
      name: 'initial state',
      textarea: 'I am initial state',
      social: 'third',
      socialList: ['first', 'second', 'third'],
      age: 20,
      switched: true
    }
  },
  watch: {
    age (value) {
      console.log(value)
      console.log(typeof value)
    }
  }
}
</script>

<style lang="stylus">
  html, body
    padding 0
    margin 0
  .nav
    display flex
  button
    display inline-block
  #app
    padding 20px
    font-family 'Avenir', Helvetica, Arial, sans-serif
    color darkcyan
    background lightcyan
  a
    text-decoration none
  p
    white-space pre
  textarea
    height 100px
    width 400px
  .btn
    background lightgreen
    color darkolivegreen
    border 3px solid darkolivegreen
    padding 10px
    border-radius 5px
    font-weight 900
    margin 5px
  .router-link-active
    background darkolivegreen
    color lightgreen
  .content
    padding 10px
  .honda,
  .nissan
    margin 10px
    padding 10px
  .dir-column
    display flex
    flex-direction column
</style>
