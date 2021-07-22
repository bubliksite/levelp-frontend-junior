const App = {
    data() {
        return {
            value: '',
            items: []
        }
    },
    methods: {
        addItem() {
            this.items.push(this.value)
            this.value = ''
        },
        removeItem(index) {
            this.items.splice(index, 1)
        }
    }
}
Vue.createApp(App).mount('#app')
