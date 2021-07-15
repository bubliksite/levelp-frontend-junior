const App = {
  beforeCreate() {
    console.log('beforeCreate ' + Date.now())
  },
  created() {
    console.log('created ' + Date.now())
  },
  beforeMount() {
    console.log('beforeMount ' + Date.now())
  },
  mounted() {
    console.log('mounted ' + Date.now())
  }
}
Vue.createApp(App).mount('#app')
