import Vue from 'vue'
import './App.css'
import App from './App.vue'

const NotFound = { template: '<p>Page not found</p>' }

const routes = {
  '/': App,
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})