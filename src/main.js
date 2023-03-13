import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
import store from '@/stores/stores'
import axios from 'axios'
import router from './router'
import VueSidebarMenu from 'vue-sidebar-menu'
import App from './App.vue'
// import 'bootstrap'
import VueSweetalert2 from 'vue-sweetalert2'
import 'bootstrap/dist/js/bootstrap.min.js'
// import 'daterangepicker/daterangepicker'

import 'sweetalert2/dist/sweetalert2.min.css'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

import '@/assets/js/daterangepicker/css/daterangepicker.css'



const app = createApp(App)
app.use(VueCookies, { expire: '1hr' })
app.use(router)
app.use(VueSweetalert2)
app.use(store)
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(VueSidebarMenu)
app.use(VueCookies)
app.mount('#app')
