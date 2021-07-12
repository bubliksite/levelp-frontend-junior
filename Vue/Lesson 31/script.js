const App = {
  data() {
    return {
      counter: 0,
      inputValue: '',
      inputInArray: '',
      items: ['Helsinki', 'Stockholm', 'Petersburg'],
      array: [],
      object: {name: 'John', age: 32, city: 'Petersburg'}
    }
  },
  methods: {
    addItemInArray() {
      this.array.push(this.inputInArray)
      this.inputInArray = ''
    },
    deleteItemInArray(index) {
      this.array.splice(index, 1)
    },
    changeColor(e) {
      e.target.classList.toggle('list-group-item-danger')
    }
  }
}
Vue.createApp(App).mount('#app')
