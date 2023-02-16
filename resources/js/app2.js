//bootstrap

require('./bootstrap');
//Vue js
window.Vue = require('vue').default;

//V Form

import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

//Vue router

import VueRouter from 'vue-router';
Vue.use(VueRouter);

//Routes

import {routes} from './routes/route-front';

const router = new VueRouter({
	routes,
	// mode:'history',

});

//SweerAlert2

import Swal from 'sweetalert2'

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});
window.Toast = Toast;

//Toastr js

import toastr from 'toastr';
window.toastr = toastr;

// Vuex

import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from './store/store2'
const store = new Vuex.Store(
	storeData
);




const app = new Vue({
    el: '#contentFront',
    router,store
});
