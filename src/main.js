import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import constant from './constant.js'

createApp(App)
    .use(constant)
    .mount('#app')
