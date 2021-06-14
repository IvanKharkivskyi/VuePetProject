export default {
  data () {
    return {
      visible: true,
      title: 'HeaderSM',
      searchName: '',
      names: ['Vlad', 'Max', 'Elena', 'Igor']
    }
  },
  computed: {
    filteredNames () {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  }
}
