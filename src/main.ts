import './assets/main.css'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOS from 'aos'

import App from './App.vue'
import router from './router'

// Initialize AOS with custom settings
AOS.init({
  duration: 1000,
  easing: 'ease-out-cubic',
  once: true,
  offset: 50,
  delay: 50,
  anchorPlacement: 'top-bottom',
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
