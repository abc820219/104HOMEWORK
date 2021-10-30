import Vue from 'vue'
import App from './App.vue'
import '@/assets/scss/all.scss'
Vue.config.productionTip = false
new Vue({
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
  render: h => h(App),
}).$mount('#app')
