//Public Component
import store from"../store/store2";
import Home from"../components/FrontEnd/Home.vue";
import Dash from"../components/FrontEnd/dash.vue";
import Login from"../components/FrontEnd/login/login.vue";
import Register from"../components/FrontEnd/login/register.vue";


//public routes



export const routes = [
	{path:'/',component: Home,name:"Home"},
	{path:'/dash',component: Dash,name:"Dash"},
	{
    path :'*',
    component:Home
	},
	{path:'/login-front',component: Login},
	{path:'/register-front',component: Register},
];